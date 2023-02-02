Ext.define('Vidly.Rentals.CustomerRentalStore', {
    extend: 'Ext.data.Store',
    alias: 'store.customerrentalstore',
    //model: 'Vidly.Rentals.RentalModel',
    //pageSize: 10,
    proxy: {
        type: 'ajax',
        url: '/api/customerrental',
        extraParams: {
            id: ''
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

