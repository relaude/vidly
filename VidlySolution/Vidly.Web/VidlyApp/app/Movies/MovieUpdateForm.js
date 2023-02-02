Ext.define('Vidly.Movies.MovieUpdateForm', {
    extend: 'Ext.form.Panel',
    xtype: 'movie-updateform',
    controller: 'moviecontroller',

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        bind: '{selectedMovie.movie}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Rent Fee',
        bind: '{selectedMovie.rentFee}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Stock',
        bind: '{selectedMovie.stock}'

    }, {
        xtype: 'combobox',
        fieldLabel: 'Genre',
        bind: '{selectedMovie.genreId}',
        store: { type: 'genres' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }],

    buttons: [{
        text: 'Update',
        listeners: {
            click: 'onClickFormUpdate'
        }
    }]
});