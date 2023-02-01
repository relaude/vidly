Ext.define('Vidly.store.Memberships', {
    extend: 'Ext.data.Store',
    alias: 'store.memberships',
    model: 'Vidly.model.Memberships',
    proxy: {
        type: 'ajax',
        url: '/api/membership',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
