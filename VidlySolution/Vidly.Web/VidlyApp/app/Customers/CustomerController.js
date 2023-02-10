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
        debugger;
        var viewModel = this.getViewModel();
        var customer = viewModel.data.customer;
        customer.id = '';
        var gridStore = Ext.getCmp('grid-customers').store;
        gridStore.add(customer);

        gridStore.sync({
            success: function () {

                var modal = Ext.getCmp('modal-add-customer');
                modal.close();
                gridStore.loadPage(1);
            },
            failure: function () {
                Ext.Msg.alert('Error', 'Error updating records!');
            }
        });
    },

    onClickFormUpdateCustomer: function () {
        var modal = Ext.getCmp('modal-edit-customer');

        var gridStore = Ext.getCmp('grid-customers').store;

        gridStore.sync({
            success: function () {
                var modal = Ext.getCmp('modal-edit-customer');
                modal.close();
                gridStore.loadPage(1);
            },
            failure: function () {
                Ext.Msg.alert('Error', 'Error updating records!');
            }
        });
    },

    onUpdateItemClickCustomer: function (grid, rowIndex, colIndex) {
        var rowData = grid.store.getData().items[rowIndex];

        var win = Ext.create('Ext.window.Window', {
            id: 'modal-edit-customer',
            title: 'Update Customer',
            modal: true,

            viewModel: {
                type: 'customerviewmodel'
            },

            items: [
                { xtype: 'customer-updateform' }
            ]
        });

        var viewModel = win.getViewModel();
        viewModel.set('customer', rowData);

        win.show();
    },

    onDeleteItemClickCustomer: function (view, rowIndex, colIndex, item, e, record) {
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
            if (btn === 'yes') {

                var gridStore = Ext.getCmp('grid-customers').store;

                gridStore.proxy.setExtraParams({
                    id: record.id
                });

                gridStore.remove(record);
                gridStore.sync();
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
