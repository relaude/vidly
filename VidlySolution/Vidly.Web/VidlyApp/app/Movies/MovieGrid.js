Ext.define('Vidly.Movies.MovieGrid', {
    id: 'grid-movies',
    extend: 'Ext.grid.Panel',
    xtype: 'moviegrid',
    store: { type: 'moviestore' },
    title: 'Movies',

    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'movie', flex: 1 },
        { text: 'Genre', dataIndex: 'genre', flex: 1 },
        { text: 'Rent Fee', dataIndex: 'rentFee', flex: 1 },
        { text: 'Stock', dataIndex: 'stock', flex: 1 },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Update",
            id: 'movie-update',
            icon: '/content/icons8-update-50.png',
            tooltip: 'Update Movie',
            handler: 'onUpdateItemClick'
        },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: "center",
            header: "Delete",
            id: 'movie-delete',
            icon: '/content/icons8-minus-50.png',
            tooltip: 'Delete Movie',
            handler: 'onDeleteItemClick'
        }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            id: 'grid-movies-search',
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