Ext.define('Vidly.Rentals.RentalSubmitForm', {
    extend: 'Ext.form.Panel',
    xtype: 'rental-submitform',
    controller: 'rentalcontroller',

    viewModel: {
        type: 'rentalviewmodel'
    },

    items: [{
        xtype: 'autocomplete-customer',
        fieldLabel: 'Customer',
        bind: '{rental.CustomerId}'
    }, {
        id: 'combobox-add-movie',
        xtype: 'autocomplete-movie',
        fieldLabel: 'Movies',
        bind: '{selectedMovieId}'
    }, {
        xtype: 'button',
        text: 'Add Movie',
        listeners: {
            click: 'onClickAddMovieRental'
    }
    }, {
        id: 'rental-add-movie-list',
        xtype: 'container',
        html: ''
    }],

    buttons: [{
        text: 'Submit',
        listeners: {
            click: 'onClickFormSubmitRental'
        }
    }]
});