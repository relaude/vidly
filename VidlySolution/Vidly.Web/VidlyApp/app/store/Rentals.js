Ext.define('Vidly.store.Rentals', {
    extend: 'Ext.data.Store',
    alias: 'store.rentals',
    model: 'Vidly.model.Rentals',
    proxy: {
        type: 'ajax',
        url: '/api/rental',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
