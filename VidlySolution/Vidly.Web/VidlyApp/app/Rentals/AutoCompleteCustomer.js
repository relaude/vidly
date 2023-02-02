Ext.define('Vidly.Rentals.AutoCompleteCustomer', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'autocomplete-customer',
    store: {
        type: 'customerstore'
    },
    displayField: 'displayName',
    valueField: 'id',
    queryMode: 'remote',
    queryParam: 'search',
    minChars: 3
});