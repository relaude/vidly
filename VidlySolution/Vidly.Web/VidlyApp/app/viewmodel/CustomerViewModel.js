Ext.define('Vidly.viewmodel.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customerviewmodel',

    data: {
        selectedCustomer: null
    },

    store: { type: 'customers' },

    //formulas: {
    //    deleteRow: function (get) {
    //        var selected = get('grid.selection');
    //        if (selected) {
    //            selected.drop();
    //        }
    //    }
    //}
});