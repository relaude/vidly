Ext.define('Vidly.view.main.PersonView', {
    extend: 'Ext.grid.Panel',
    xtype: 'personview',

    store: {
        type: 'personstore'
    },

    columns: [{
        text: 'First Name',
        dataIndex: 'firstName',
        editor: 'textfield'
    }, {
        text: 'Last Name',
        dataIndex: 'lastName',
        editor: 'textfield'
    }]
});