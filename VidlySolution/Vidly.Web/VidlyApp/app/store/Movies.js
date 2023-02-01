Ext.define('Vidly.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',
    model: 'Vidly.model.Movies',
    proxy: {
        type: 'ajax',
        url: '/api/movie',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
