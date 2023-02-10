Ext.define('Vidly.Movies.MovieController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.moviecontroller',

    onClickButtonSearchMovie: function () {
        refreshGridStoreMovie();
    },

    onClickAddButtonMovie: function () {
        var win = Ext.create('Ext.window.Window', {
            id: 'modal-add-movie',
            title: 'New Movie',
            modal: true,
            items: [
                { xtype: 'movie-submitform' }
            ]
        });

        win.show();
    },

    onClickFormSubmitMovie: function () {
        
        var viewModel = this.getViewModel();
        var movie = viewModel.data.movie;
        movie.id = '';
        var gridStore = Ext.getCmp('grid-movies').store;
        gridStore.add(movie);

        gridStore.sync({
            success: function () {
              
                var modal = Ext.getCmp('modal-add-movie');
                modal.close();
                gridStore.loadPage(1);
            },
            failure: function () {
                Ext.Msg.alert('Error', 'Error updating records!');
            }
        });
    },

    onClickFormUpdateMovie: function () {
        var modal = Ext.getCmp('modal-edit-movie');

        var gridStore = Ext.getCmp('grid-movies').store;

        gridStore.sync({
            success: function () {
                var modal = Ext.getCmp('modal-edit-movie');
                modal.close();
                gridStore.loadPage(1);
            },
            failure: function () {
                Ext.Msg.alert('Error', 'Error updating records!');
            }
        });
    },

    onUpdateItemClickMovie: function (grid, rowIndex, colIndex) {

        var rowData = grid.store.getData().items[rowIndex];

        var win = Ext.create('Ext.window.Window', {
            id: 'modal-edit-movie',
            title: 'Update Movie',
            modal: true,

            viewModel: {
                type: 'movieviewmodel'
            },

            items: [
                { xtype: 'movie-updateform' }
            ]
        });

        var viewModel = win.getViewModel();
        viewModel.set('movie', rowData);

        win.show();
    },

    onDeleteItemClickMovie: function (view, rowIndex, colIndex, item, e, record) {
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
            if (btn === 'yes') {

                var gridStore = Ext.getCmp('grid-movies').store;

                gridStore.proxy.setExtraParams({
                    id: record.id
                });

                gridStore.remove(record);
                gridStore.sync();
            }
        }, this);
    }

});

function refreshGridStoreMovie() {
    var grid = Ext.getCmp('grid-movies');
    var search = grid.up().viewModel.data.search;

    grid.store.getProxy().setExtraParams({
        search: search
    });

    grid.store.loadPage(1);
}

function transactMovie(movie, url, method, modalId) {
    Ext.Ajax.request({
        url: url,
        method: method,
        headers: { "Content-Type": "application/json" },
        jsonData: movie,
        success: function (response) {
            refreshGridStoreMovie();

            if (modalId) {
                var modal = Ext.getCmp(modalId);
                modal.close();
            }
        }
    });
}
