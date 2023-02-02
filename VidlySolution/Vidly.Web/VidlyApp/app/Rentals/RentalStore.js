Ext.define('Vidly.Rentals.RentalStore', {
    extend: 'Ext.data.Store',
    alias: 'store.rentalstore',
    model: 'Vidly.Rentals.RentalModel',
    pageSize: 10,
    proxy: {
        type: 'ajax',
        url: '/api/rental',
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

