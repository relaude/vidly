var pageSize = 10;

Ext.define('Vidly.store.Customers', {
    id: 'store.customers',
    extend: 'Ext.data.Store',
    alias: 'store.customers',
    model: 'Vidly.model.Customers',
    pageSize: pageSize,
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
    autoLoad: {start: 0, limit: pageSize}
});

