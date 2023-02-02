Ext.define('Vidly.Customers.CustomerUpdateForm', {
    extend: 'Ext.form.Panel',
    xtype: 'customer-updateform',
    controller: 'customercontroller',

    items: [{
        id: 'customer-edit-firstname',
        xtype: 'textfield',
        fieldLabel: 'First Name',
        bind: '{selectedCustomer.firstName}'
    }, {
        id: 'customer-edit-lastname',
        xtype: 'textfield',
        fieldLabel: 'Last Name',
        bind: '{selectedCustomer.lastName}'
        }, {
        id: 'customer-edit-dateofbirth',
        xtype: 'datefield',
        fieldLabel: 'Birthday',
        format: 'Y-m-d',
        bind: '{selectedCustomer.dateOfBirth}'
    }, {
        id: 'customer-edit-membership',
        xtype: 'combobox',
        fieldLabel: 'Membership',
        bind: '{selectedCustomer.membershipId}',
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
            click: 'onClickFormUpdateCustomer'
        }
    }]
});