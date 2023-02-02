Ext.define('Vidly.Rentals.RentalMain', {
    extend: 'Ext.container.Container',
    xtype: 'rentalmainview',

    controller: 'rentalcontroller',
    viewModel: 'rentalviewmodel',

    items: [{xtype: 'rentalgrid'}]
});