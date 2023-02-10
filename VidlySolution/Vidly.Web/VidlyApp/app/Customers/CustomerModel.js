Ext.define('Vidly.Customers.CustomerModel', {
    extend: 'Vidly.model.Base',

    fields: [
        'id', 'displayName', 'membership', 'firstName', 'lastName', 'dateOfBirth', 'membership_Id'
    ]
});
