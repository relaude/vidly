/**
 * This view is an example list of people.
 */
Ext.define('Vidly.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    title: 'Rentals',

    store: {
        type: 'rentals'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Customer', dataIndex: 'customer', flex: 1 },
        { text: 'Rented', dataIndex: 'rented', flex: 1 },
        { text: 'Pending', dataIndex: 'pending', flex: 1 }
    ]
});
