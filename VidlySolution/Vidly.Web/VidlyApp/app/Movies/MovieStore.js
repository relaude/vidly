
Ext.define('Vidly.Movies.MovieStore', {
    id: 'store.customers',
    extend: 'Ext.data.Store',
    alias: 'store.moviestore',
    model: 'Vidly.Movies.MovieModel',
    pageSize: 10,
    proxy: {
        type: 'ajax',
        url: '/api/movie',
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

