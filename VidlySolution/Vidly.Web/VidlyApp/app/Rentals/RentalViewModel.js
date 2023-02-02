Ext.define('Vidly.Rentals.RentalViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rentalviewmodel',

    data: {
        search: '',

        selectedRental: null,
        selectedCustomerRental: null,
        selectedMovieId: null,
        selectedMovies: [],

        listData: [
            { text: 'Item 1' },
            { text: 'Item 2' },
            { text: 'Item 3' }
        ],

        rental: { CustomerId: 0, MovieIds: [] }
    },

    stores: {
        rentalStore: { type: 'rentalstore' },
        customerRentalStore: { type: 'customerrentalstore' }
    }
});