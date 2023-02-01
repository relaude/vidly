Ext.define('Vidly.viewmodel.PersonViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.personviewmodel',
    data: {
        selectedPerson: null,
        count: 0
    },
    stores: {
        personStore: {
            type: 'personstore'
        }
    },
    formulas: {
        fullName: function (get) {
            var person = get('selectedPerson');
            return person ? person.get('firstName') + ' ' + person.get('lastName') : '';
        }
    }
});