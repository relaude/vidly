Ext.define('Vidly.Customers.CustomerSubmitForm', {
    extend: 'Ext.form.Panel',
    xtype: 'customer-submitform',
    controller: 'customercontroller',
    viewModel: {
        type: 'customerviewmodel'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'First Name',
        bind: '{customer.FirstName}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Last Name',
        bind: '{customer.LastName}'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Birthday',
        bind: '{customer.DateOfBirth}'

    }, {
        xtype: 'combobox',
        fieldLabel: 'Membership',
        bind: '{customer.Membership_Id}',
        store: { type: 'memberships' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }],

    buttons: [{
        text: 'Submit',
        listeners: {
            click: 'onClickFormSubmit'
        }
    }]
});