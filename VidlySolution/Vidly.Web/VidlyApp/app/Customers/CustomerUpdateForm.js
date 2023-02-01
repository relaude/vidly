Ext.define('Vidly.Customers.CustomerUpdateForm', {
    extend: 'Ext.form.Panel',
    xtype: 'customer-updateform',
    controller: 'customercontroller',
    viewModel: {
        type: 'customerviewmodel'
    },
    items: [{
        id: 'customer-edit-firstname',
        xtype: 'textfield',
        fieldLabel: 'First Name'
    }, {
        id: 'customer-edit-lastname',
        xtype: 'textfield',
        fieldLabel: 'Last Name'
        }, {
        id: 'customer-edit-dateofbirth',
        xtype: 'datefield',
        fieldLabel: 'Birthday'

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
        xtype: 'hiddenfield'
    }],

    buttons: [{
        text: 'Update',
        listeners: {
            click: 'onClickFormUpdate'
        }
    }]
});