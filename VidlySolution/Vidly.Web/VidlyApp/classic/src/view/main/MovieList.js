Ext.define('Vidly.view.main.MovieList', {
    extend: 'Ext.grid.Panel',
    xtype: 'movielist',

    requires: [
        'Vidly.store.Movies'
    ],

    title: 'Movies',

    store: {
        type: 'movies'
    },

    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Movie', dataIndex: 'movie', flex: 1 },
        { text: 'Genre', dataIndex: 'genre', flex: 1 },
        { text: 'Rent Fee', dataIndex: 'rentFee', flex: 1 },
        { text: 'Stock', dataIndex: 'stock', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
