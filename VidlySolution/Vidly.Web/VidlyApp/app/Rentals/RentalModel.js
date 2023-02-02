Ext.define('Vidly.Rentals.RentalModel', {
    extend: 'Vidly.model.Base',

    fields: [
        'id', 'customer', 'membership', 'rented', 'pending'
    ]
});
