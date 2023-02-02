Ext.define('Vidly.Customers.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customercontroller',

    onClickButtonSearchCustomer: function () {
        refreshGridStoreCustomer();
    },

    onClickAddButtonCustomer: function () {
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

    onClickFormSubmitCustomer: function () {
        var viewModel = this.getViewModel();
        var customer = viewModel.get('customer');

        transactCustomer(customer, '/api/customer', 'POST', 'modal-add-customer');
    },

    onClickFormUpdateCustomer: function () {
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

    onUpdateItemClickCustomer: function (view, rowIndex, colIndex, item, e, record) {
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

    onDeleteItemClickCustomer: function (view, rowIndex, colIndex, item, e, record) {
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
            if (btn === 'yes') {
                var customer = record.data;

                transactCustomer(customer, '/api/customer/' + customer.id, 'DELETE', null);
            }
        }, this);
    }

});

function refreshGridStoreCustomer() {
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
            refreshGridStoreCustomer();

            if (modalId) {
                var modal = Ext.getCmp(modalId);
                modal.close();
            }
        }
    });
}
