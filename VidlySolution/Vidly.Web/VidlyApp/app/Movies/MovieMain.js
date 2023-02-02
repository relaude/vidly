Ext.define('Vidly.Movies.MovieMain', {
    extend: 'Ext.container.Container',
    xtype: 'moviemainview',

    controller: 'moviecontroller',
    viewModel: 'movieviewmodel',

    items: [
        {
            xtype: 'moviegrid'
        }]
});