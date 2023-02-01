Ext.define('Vidly.store.PersonStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personstore',
    model: 'Vidly.model.Person',

    data: [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Doe' }
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
