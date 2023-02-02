Ext.define('Vidly.Customers.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customercontroller',

    onClickButtonSearch: function () {
        refreshGridStore();
    },

    onClickAddButton: function () {
        var win = Ext.create('Ext.window.Window', {
            id: 'modal-add-customer',
            title: 'New Customer',
            modal: true,
            items: [
                { xtype: 'customer-submitform' }
            ]
        });

        win.show();
    },

    onClickFormSubmit: function () {
        var viewModel = this.getViewModel();
        var customer = viewModel.get('customer');

        transactCustomer(customer, '/api/customer', 'POST', 'modal-add-customer');
    },

    onClickFormUpdate: function () {
        var modal = Ext.getCmp('modal-edit-customer');
        var selectedCustomer = modal.viewModel.data.selectedCustomer;
        
        var customer = {
            Id: selectedCustomer.id,
            FirstName: selectedCustomer.firstName,
            LastName: selectedCustomer.lastName,
            DateOfBirth: selectedCustomer.dateOfBirth,
            Membership_Id: selectedCustomer.membershipId
        };
        
        transactCustomer(customer, '/api/customer/' + customer.Id, 'PUT', 'modal-edit-customer');
    },

    onUpdateItemClick: function (view, rowIndex, colIndex, item, e, record) {
        var selectedCustomer = record.data;
        selectedCustomer.membershipId = record.data.membershipId.toString();


        var win = Ext.create('Ext.window.Window', {
            id: 'modal-edit-customer',
            title: selectedCustomer.displayName,
            modal: true,

            viewModel: {
                type: 'customerviewmodel'
            },

            items: [
                { xtype: 'customer-updateform' }
            ]
        });

        win.show();
        win.viewModel.set('selectedCustomer', selectedCustomer);
    },

    onDeleteItemClick: function (view, rowIndex, colIndex, item, e, record) {
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
            if (btn === 'yes') {
                var customer = record.data;

                transactCustomer(customer, '/api/customer/' + customer.id, 'DELETE', null);
            }
        }, this);
    }

});

function refreshGridStore() {
    var grid = Ext.getCmp('grid-customers');
    var search = grid.up().viewModel.data.search;
    
    grid.store.getProxy().setExtraParams({
        search: search
    });

    grid.store.loadPage(1);
}

function transactCustomer(customer, url, method, modalId) {
    Ext.Ajax.request({
        url: url,
        method: method,
        headers: { "Content-Type": "application/json" },
        jsonData: customer,
        success: function (response) {
            refreshGridStore();

            if (modalId) {
                var modal = Ext.getCmp(modalId);
                modal.close();
            }
        }
    });
}
