Ext.define('Vidly.Movies.MovieViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movieviewmodel',

    data: {
        search: '',
        selectedMovie: null,
        movie: { Name: '', RentFee: 0, Stock: 0, Genre_Id: '8' }
    },

    stores: {
        movieStore: {
            type: 'moviestore'
        }
    }
});