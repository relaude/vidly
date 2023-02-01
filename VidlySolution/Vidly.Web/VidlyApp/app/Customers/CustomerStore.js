
Ext.define('Vidly.Customers.CustomerStore', {
    id: 'store.customers',
    extend: 'Ext.data.Store',
    alias: 'store.customerstore',
    model: 'Vidly.Customers.CustomerModel',
    pageSize: 10,
    proxy: {
        type: 'ajax',
        url: '/api/customer',
        extraParams: {
            search: ''
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'results'
        }
    },
    autoLoad: { start: 0, limit: 10 }
});

