Ext.define('Vidly.Rentals.CustomerRentalGrid', {
    id: 'grid-customerrentals',
    extend: 'Ext.grid.Panel',
    xtype: 'customerrentalgrid',
    controller: 'rentalcontroller',
    bind: {
        store: '{customerRentalStore}'
    },

    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Movie', dataIndex: 'movie', flex: 1 },
        { text: 'Rent Fee', dataIndex: 'rentFee', flex: 1 },
        { text: 'Rented', dataIndex: 'dateRented', flex: 1 },
        { text: 'Returned', dataIndex: 'dateReturned', flex: 1 },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Update",
            icon: '/content/icons8-update-50.png',
            tooltip: 'Update',
            handler: 'onUpdateReturnDateClick'
        }
    ]
});