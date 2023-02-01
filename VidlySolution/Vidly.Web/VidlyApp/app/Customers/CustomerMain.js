Ext.define('Vidly.Customers.CustomerMain', {
    extend: 'Ext.container.Container',
    xtype: 'customermainview',

    controller: 'customercontroller',
    viewModel: 'customerviewmodel',

    items: [
    {
        xtype: 'customergrid'
    }]
});