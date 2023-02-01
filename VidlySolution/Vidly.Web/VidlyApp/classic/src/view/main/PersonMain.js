Ext.define('Vidly.view.main.PersonMain', {
    extend: 'Ext.container.Container',
    xtype: 'personmainview',

    controller: 'personcontroller',
    viewModel: 'personviewmodel',

    items: [{
        xtype: 'personview',
        bind: {
            selection: '{selectedPerson}'
        }
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Full Name',
        bind: '{fullName}'
        }, {
        xtype: 'button',
        text: 'Click me',
        listeners: {
            click: 'onClickButton'
        }
        }, {
        xtype: 'displayfield',
        bind: {
            value: '{count}'
        }
    }]
});