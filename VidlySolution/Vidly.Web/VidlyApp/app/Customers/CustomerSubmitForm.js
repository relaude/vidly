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
        bind: '{customer.firstName}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Last Name',
        bind: '{customer.lastName}'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Birthday',
        format: 'Y-m-d',
        bind: '{customer.dateOfBirth}'

    }, {
        xtype: 'combobox',
        fieldLabel: 'Membership',
        bind: '{customer.membership_Id}',
        store: { type: 'memberships' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }],

    buttons: [{
        text: 'Submit',
        listeners: {
            click: 'onClickFormSubmitCustomer'
        }
    }]
});