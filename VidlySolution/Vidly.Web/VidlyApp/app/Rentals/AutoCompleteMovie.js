Ext.define('Vidly.Rentals.AutoCompleteMovie', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'autocomplete-movie',
    store: {
        type: 'moviestore'
    },
    displayField: 'movie',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'search',
    minChars: 3
});