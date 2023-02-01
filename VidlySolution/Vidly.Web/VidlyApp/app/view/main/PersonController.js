Ext.define('Vidly.view.main.PersonController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.personcontroller',

    onClickButton: function () {
        var viewModel = this.getViewModel(),
            count = viewModel.get('count');
        viewModel.set('count', count + 1);
    }
});