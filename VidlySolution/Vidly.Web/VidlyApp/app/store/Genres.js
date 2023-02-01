Ext.define('Vidly.store.Genres', {
    extend: 'Ext.data.Store',
    alias: 'store.genres',
    model: 'Vidly.model.Genres',
    proxy: {
        type: 'ajax',
        url: '/api/genre',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
