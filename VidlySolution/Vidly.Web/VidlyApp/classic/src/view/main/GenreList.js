Ext.define('Vidly.view.main.GenreList', {
    extend: 'Ext.grid.Panel',
    xtype: 'genrelist',

    requires: [
        'Vidly.store.Genres'
    ],

    title: 'Genres',

    store: {
        type: 'genres'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'name', flex: 1  }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
