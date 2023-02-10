Ext.define('Vidly.Customers.CustomerUpdateForm', {
    extend: 'Ext.form.Panel',
    xtype: 'customer-updateform',
    controller: 'customercontroller',

    items: [{
        id: 'customer-edit-firstname',
        xtype: 'textfield',
        fieldLabel: 'First Name',
        bind: '{customer.firstName}'
    }, {
        id: 'customer-edit-lastname',
        xtype: 'textfield',
        fieldLabel: 'Last Name',
        bind: '{customer.lastName}'
        }, {
        id: 'customer-edit-dateofbirth',
        xtype: 'datefield',
        fieldLabel: 'Birthday',
        format: 'Y-m-d',
        bind: '{customer.dateOfBirth}'
    }, {
        id: 'customer-edit-membership',
        xtype: 'combobox',
        fieldLabel: 'Membership',
        bind: '{customer.membership_Id}',
        store: { type: 'memberships' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }, {
        xtype: 'hiddenfield',
        bind: '{customer.id}'
    }],

    buttons: [{
        text: 'Update',
        listeners: {
            click: 'onClickFormUpdateCustomer'
        }
    }]
});