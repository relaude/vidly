Ext.define('Vidly.Movies.MovieController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.moviecontroller',

    onClickButtonSearch: function () {
        refreshGridStore();
    },

    onClickAddButton: function () {
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

    onClickFormSubmit: function () {
        var viewModel = this.getViewModel();
        var movie = viewModel.get('movie');

        transactMovie(movie, '/api/movie', 'POST', 'modal-add-movie');
    },

    onClickFormUpdate: function () {
        var modal = Ext.getCmp('modal-edit-movie');
        var selectedMovie = modal.viewModel.data.selectedMovie;

        var movie = {
            Id: selectedMovie.id,
            Name: selectedMovie.movie,
            RentFee: selectedMovie.rentFee,
            Stock: selectedMovie.stock,
            Genre_Id: selectedMovie.genreId
        };

        transactMovie(movie, '/api/movie/' + movie.Id, 'PUT', 'modal-edit-movie');
    },

    onUpdateItemClick: function (view, rowIndex, colIndex, item, e, record) {
        var selectedMovie = record.data;
        selectedMovie.genreId = record.data.genreId.toString();

        var win = Ext.create('Ext.window.Window', {
            id: 'modal-edit-movie',
            title: selectedMovie.movie,
            modal: true,

            viewModel: {
                type: 'movieviewmodel'
            },

            items: [
                { xtype: 'movie-updateform' }
            ]
        });

        win.show();
        win.viewModel.set('selectedMovie', selectedMovie);
    },

    onDeleteItemClick: function (view, rowIndex, colIndex, item, e, record) {
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this item?', function (btn) {
            if (btn === 'yes') {
                var movie = record.data;

                transactMovie(movie, '/api/movie/' + movie.id, 'DELETE', null);
            }
        }, this);
    }

});

function refreshGridStore() {
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
            refreshGridStore();

            if (modalId) {
                var modal = Ext.getCmp(modalId);
                modal.close();
            }
        }
    });
}
