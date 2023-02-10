
Ext.define('Vidly.Movies.MovieStore', {
    extend: 'Ext.data.Store',
    alias: 'store.moviestore',
    model: 'Vidly.Movies.MovieModel',
    pageSize: 10,
    proxy: {
        type: 'rest',
        url: '/api/movie',

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

