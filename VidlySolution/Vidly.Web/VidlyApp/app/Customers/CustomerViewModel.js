Ext.define('Vidly.Customers.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customerviewmodel',

    data: {
        search: '',
        customer: null
    },

    stores: {
        customerStore: {
            type: 'customerstore'
        }
    }
});