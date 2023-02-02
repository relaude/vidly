Ext.define('Vidly.Rentals.WidgetUlMovie', {
    extend: 'Ext.Component',
    xtype: 'widget.ulmovie',

    tpl: '<ul><tpl for="."><li>{.}</li></tpl></ul>',

    bind: {
        data: '{selectedMovies}'
    }
});