Ext.define('Vidly.Rentals.RentalGrid', {
    id: 'grid-rentals',
    extend: 'Ext.grid.Panel',
    xtype: 'rentalgrid',

    //store: { type: 'rentalstore' },
    bind: {
        store: '{rentalStore}'
    },

    title: 'Rentals',

    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Customer', dataIndex: 'customer', flex: 1 },
        { text: 'Membership', dataIndex: 'membership', flex: 1 },
        { text: 'Rented', dataIndex: 'rented', flex: 1 },
        { text: 'Pending', dataIndex: 'pending', flex: 1 },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Details",
            id: 'rental-update',
            icon: '/content/icons8-update-50.png',
            tooltip: 'Details',
            handler: 'onUpdateItemClick'
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            id: 'grid-rentals-search',
            xtype: 'textfield',
            bind: '{search}',
            emptyText: 'search'
        }, {
            xtype: 'button',
            text: 'Search',
            listeners: {
                click: 'onClickButtonSearch'
            }
        }, {
            xtype: 'button',
            text: 'Add',
            listeners: {
                click: 'onClickAddButton'
            }
        }],
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});