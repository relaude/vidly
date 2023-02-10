Ext.define('Vidly.Movies.MovieViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movieviewmodel',

    data: {
        search: '',
        movie: null
    },

    stores: {
        movieStore: {
            type: 'moviestore'
        }
    }
});