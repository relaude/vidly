Ext.define('Vidly.Customers.CustomerModel', {
    extend: 'Vidly.model.Base',

    idProperty: 'id',

    fields: [
        { name: 'id', type: 'int', persist: false },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'dateOfBirth', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'membership_Id', type: 'int' },

        { name: 'displayName', type: 'string' },
        { name: 'membership', type: 'string' }
    ]
});
