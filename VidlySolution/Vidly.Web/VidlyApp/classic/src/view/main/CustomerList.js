function searchStore(page) {
    var grid = Ext.getCmp('grid-customers');
    var search = Ext.getCmp('searchField').getValue();
    
    grid.store.getProxy().setExtraParams({
        search: search
    });

    grid.store.loadPage(page);
}

function addCustomer(newCustomer){
    Ext.Ajax.request({
        url: '/api/customer/',
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        jsonData: newCustomer,
        success: function (response) {
            var modal = Ext.getCmp('modal-add-customer');
            modal.close();
            searchStore(1);
        }
    });
}

function editCustomer(customer){
    Ext.Ajax.request({
        url: '/api/customer/' + customer.id,
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        jsonData: customer,
        success: function (response) {
            var modal = Ext.getCmp('modal-edit-customer');
            modal.close();
            searchStore(1);
        }
    });
}

function populateEditForm(rowIndex){
    var grid = Ext.getCmp('grid-customers');
    var record = grid.store.getAt(rowIndex);

    Ext.getCmp('customer-edit-id').setValue(record.data.id);
    Ext.getCmp('customer-edit-firstname').setValue(record.data.firstName);
    Ext.getCmp('customer-edit-lastname').setValue(record.data.lastName);
    Ext.getCmp('customer-edit-dateofbirth').setValue(record.data.dateOfBirth);
    Ext.getCmp('customer-edit-membership').setValue(record.data.membershipId.toString());
}

function deleteCustomer(rowIndex){
    Ext.MessageBox.confirm('Confirmation', 'Are you sure you want to delete this item?', function (btn) {
        if (btn === 'yes') {
            var grid = Ext.getCmp('grid-customers');
            var record = grid.store.getAt(rowIndex);

            Ext.Ajax.request({
                url: '/api/customer/' + record.id,
                method: 'DELETE',
                success: function (response) {
                    searchStore(1);
                }
            });
        }
    });
}

//Start Add Modal
var formAdd = Ext.create('Ext.form.Panel',{
    items: [{
        id: 'customer-add-lastname',
        xtype: 'textfield',
        fieldLabel: 'Last Name',
        name: 'lastName'
    }, {
        id: 'customer-add-firstname',
        xtype: 'textfield',
        fieldLabel: 'First Name',
        name: 'firstName'
    }, {
        id: 'customer-add-dateofbirth',
        xtype: 'datefield',
        fieldLabel: 'Birthday',
        name: 'dateOfBirth'
    }, {
        id: 'customer-add-membership',
        xtype: 'combobox',
        fieldLabel: 'Membership',
        store: { type: 'memberships' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }],
    buttons: [{
        text: 'Submit',
        handler: function () {

            var newCustomer = {
                FirstName: Ext.getCmp('customer-add-firstname').getValue(),
                LastName: Ext.getCmp('customer-add-lastname').getValue(),
                DateOfBirth: Ext.getCmp('customer-add-dateofbirth').getValue(),
                Membership_Id: Ext.getCmp('customer-add-membership').getValue()
            };

            addCustomer(newCustomer);
        }
    }]
});
//End Add Modal

//Start Edit Modal
var formEdit = Ext.create('Ext.form.Panel',{
    items: [{
        id: 'customer-edit-lastname',
        xtype: 'textfield',
        fieldLabel: 'Last Name',
        name: 'lastName'
    }, {
        id: 'customer-edit-firstname',
        xtype: 'textfield',
        fieldLabel: 'First Name',
        name: 'firstName'
    }, {
        id: 'customer-edit-dateofbirth',
        xtype: 'datefield',
        fieldLabel: 'Birthday',
        name: 'dateOfBirth'
    }, {
        id: 'customer-edit-membership',
        xtype: 'combobox',
        fieldLabel: 'Membership',
        store: { type: 'memberships' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }, {
        id: 'customer-edit-id',
        xtype: 'hiddenfield',
    }],
    buttons: [{
        text: 'Submit',
        handler: function () {

            var customer = {
                Id: Ext.getCmp('customer-edit-id').getValue(),
                FirstName: Ext.getCmp('customer-edit-firstname').getValue(),
                LastName: Ext.getCmp('customer-edit-lastname').getValue(),
                DateOfBirth: Ext.getCmp('customer-edit-dateofbirth').getValue(),
                Membership_Id: Ext.getCmp('customer-edit-membership').getValue()
            };

            editCustomer(customer);
        }
    }]
});
//End Edit Modal

Ext.define('Vidly.view.main.CustomerList', {
    id: 'grid-customers',
    extend: 'Ext.grid.Panel',
    xtype: 'customerlist',
    store: { type: 'customers'},
    title: 'Customers',

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'displayName', flex: 1  },
        { text: 'Membership',  dataIndex: 'membership', flex: 1  },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Update",
            id: 'customer-update',
            icon: '/content/icons8-update-50.png',
            tooltip: 'Update Customer',
            handler: function(grid, rowIndex, colIndex){
                var win = Ext.create('Ext.window.Window', {
                    id: 'modal-edit-customer',
                    title: 'Customer',
                    modal: true,
                    items: [formEdit]
                });
                
                populateEditForm(rowIndex);
                win.show();
            }
        },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Delete",
            id: 'customer-delete',
            icon: '/content/icons8-minus-50.png',
            tooltip: 'Delete Customer',
            handler: function(grid, rowIndex, colIndex){
                deleteCustomer(rowIndex);
            }
        }
    ],
    
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            id: 'searchField',
            xtype: 'textfield',
            emptyText: 'search'
        },{
            xtype: 'button',
            text: 'Search',
            handler: function () {
                searchStore(1);
            }
        },{
            xtype: 'button',
            text: 'Add',
            handler: function () {
                var win = Ext.create('Ext.window.Window', {
                    id: 'modal-add-customer',
                    title: 'New Customer',
                    modal: true,
                    items: [formAdd]
                });
                
                win.show();
            }
        }],
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
