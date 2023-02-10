
Ext.define('Vidly.Customers.CustomerStore', {
    extend: 'Ext.data.Store',
    alias: 'store.customerstore',
    model: 'Vidly.Customers.CustomerModel',
    pageSize: 10,
    proxy: {
        type: 'rest',
        url: '/api/customer',
        extraParams: {
            search: '',
            id: ''
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'results'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },
    autoLoad: { start: 0, limit: 10 }
});

