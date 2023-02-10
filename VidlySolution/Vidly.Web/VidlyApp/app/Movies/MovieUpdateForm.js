Ext.define('Vidly.Movies.MovieUpdateForm', {
    extend: 'Ext.form.Panel',
    xtype: 'movie-updateform',
    controller: 'moviecontroller',

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        bind: '{movie.name}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Rent Fee',
        bind: '{movie.rentFee}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Stock',
        bind: '{movie.stock}'

    }, {
        xtype: 'combobox',
        fieldLabel: 'Genre',
        bind: '{movie.genre_Id}',
        store: { type: 'genres' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }, {
        xtype: 'hiddenfield',
        bind: '{movie.id}'
    }],

    buttons: [{
        text: 'Update',
        listeners: {
            click: 'onClickFormUpdateMovie'
        }
    }]
});