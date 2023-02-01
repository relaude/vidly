Ext.define('Vidly.Customers.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customercontroller',

    onClickButtonSearch: function () {
        var viewModel = this.getViewModel();
        var search = viewModel.get('search');

        refreshGridStore(search);
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

        transactCustomer(customer, '/api/customer', 'POST', null, 'modal-add-customer');
    },

    onClickFormUpdate: function () {
        var customer = {
            Id: Ext.getCmp('customer-edit-id').getValue(),
            FirstName: Ext.getCmp('customer-edit-firstname').getValue(),
            LastName: Ext.getCmp('customer-edit-lastname').getValue(),
            DateOfBirth: Ext.getCmp('customer-edit-dateofbirth').getValue(),
            Membership_Id: Ext.getCmp('customer-edit-membership').getValue()
        };

        transactCustomer(customer, '/api/customer/' + customer.id, 'PUT', null, 'modal-edit-customer');
    },

    onUpdateItemClick: function (view, rowIndex, colIndex, item, e, record) {
        var selectedCustomer = record.data;
        selectedCustomer.membershipId = record.data.membershipId.toString();

        var win = Ext.create('Ext.window.Window', {
            id: 'modal-edit-customer',
            title: selectedCustomer.displayName,
            modal: true,
            items: [
                { xtype: 'customer-updateform' }
            ]
        });

        win.show();

        fillEditForm(selectedCustomer);
    },

    onDeleteItemClick: function (view, rowIndex, colIndex, item, e, record) {
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
            if (btn === 'yes') {
                var customer = record.data;

                transactCustomer(customer, '/api/customer/' + customer.id, 'DELETE', null, null);
            }
        }, this);
    }

});

function refreshGridStore(search) {
    var grid = Ext.getCmp('grid-customers');
    
    grid.store.getProxy().setExtraParams({
        search: search
    });

    grid.store.loadPage(1);
}

function transactCustomer(customer, url, method, search, modalId) {
    Ext.Ajax.request({
        url: url,
        method: method,
        headers: { "Content-Type": "application/json" },
        jsonData: customer,
        success: function (response) {
            refreshGridStore(search);

            if (modalId) {
                var modal = Ext.getCmp(modalId);
                modal.close();
            }
        }
    });
}

function fillEditForm(record) {
    Ext.getCmp('customer-edit-id').setValue(record.id);
    Ext.getCmp('customer-edit-firstname').setValue(record.firstName);
    Ext.getCmp('customer-edit-lastname').setValue(record.lastName);
    Ext.getCmp('customer-edit-dateofbirth').setValue(record.dateOfBirth);
    Ext.getCmp('customer-edit-membership').setValue(record.membershipId);
}
