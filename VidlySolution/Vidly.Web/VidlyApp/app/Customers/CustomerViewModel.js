Ext.define('Vidly.Customers.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customerviewmodel',

    data: {
        search: '',
        customer: { FirstName: '', LastName: '', DateOfBirth: '', Membership_Id: '5' }
    },

    stores: {
        customerStore: {
            type: 'customerstore'
        }
    },

    autoLoad: true
});