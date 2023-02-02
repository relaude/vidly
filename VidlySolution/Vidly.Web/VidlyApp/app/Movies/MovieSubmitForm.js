Ext.define('Vidly.Movies.MovieSubmitForm', {
    extend: 'Ext.form.Panel',
    xtype: 'movie-submitform',
    controller: 'moviecontroller',

    viewModel: {
        type: 'movieviewmodel'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        bind: '{movie.Name}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Rent Fee',
        bind: '{movie.RentFee}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Stock',
        bind: '{movie.Stock}'

    }, {
        xtype: 'combobox',
        fieldLabel: 'Genre',
        bind: '{movie.Genre_Id}',
        store: { type: 'genres' },
        displayField: 'name',
        valueField: 'id',
        editable: false
    }],

    buttons: [{
        text: 'Submit',
        listeners: {
            click: 'onClickFormSubmitMovie'
        }
    }]
});