Ext.define('Vidly.Rentals.RentalController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rentalcontroller',

    onClickButtonSearchRental: function () {
        refreshGridStoreRental();
    },

    onClickAddButtonRental: function () {
        var win = Ext.create('Ext.window.Window', {
            id: 'modal-add-rental',
            title: 'New Rental',
            modal: true,
            items: [
                { xtype: 'rental-submitform' }
            ]
        });

        win.show();
    },

    onClickAddMovieRental: function () {
        var viewModel = this.getViewModel();
        var rental = viewModel.get('rental');
        var selectedMovieId = viewModel.get('selectedMovieId');
        var selectedMovies = viewModel.get('selectedMovies');
        
        var combobox = Ext.getCmp('combobox-add-movie');
        var container = Ext.getCmp('rental-add-movie-list');

        var litag = '';

        if (!Ext.Array.contains(rental.MovieIds, selectedMovieId)) {
            rental.MovieIds.push(selectedMovieId);
            selectedMovies.push(combobox.getDisplayValue());
        }

        for (var i = 0; i < selectedMovies.length; i++) {
            litag = litag + '<li>' + selectedMovies[i] + '</li>';
        }

        container.update('<ol>' + litag + '</ol>');

        console.log(rental);
        console.log(selectedMovies);
    },

    onClickFormSubmitRental: function () {
        var viewModel = this.getViewModel();
        var rental = viewModel.get('rental');

        console.log(rental);
        transactRental(rental, '/api/rental', 'POST', 'modal-add-rental');
    },


    onUpdateItemClickRental: function (view, rowIndex, colIndex, item, e, record) {
        var selectedRental = record.data;

        var win = Ext.create('Ext.window.Window', {
            id: 'modal-edit-customerrental',
            title: selectedRental.customer + ' (' + selectedRental.membership + ')',
            modal: true,
            width: 600,
            height: 400,

            viewModel: {
                type: 'rentalviewmodel'
            },

            items: [
                { xtype: 'customerrentalgrid' }
            ]
        });

        win.show();
        var customerRentalStore = win.viewModel.storeInfo.customerRentalStore;

        customerRentalStore.getProxy().setExtraParams({
            id: selectedRental.id
        });

        customerRentalStore.loadPage(1);
    },

    onUpdateReturnDateClickRental: function (view, rowIndex, colIndex, item, e, record) {
        var selectedCustomerRental = record.data;

        var win = Ext.create('Ext.window.Window', {
            id: 'modal-edit-customerrental-returndate',
            title: selectedCustomerRental.movie,
            modal: true,

            items: [
                {
                    id: 'edit-customerrental-returndate',
                    xtype: 'datefield',
                    value: selectedCustomerRental.dateReturned,
                    fieldLabel: 'Returned Date',
                    format: 'Y-m-d'
                }
            ],
            buttons: [{
                text: 'Update',
                handler: function () {

                    var dto = {
                        Id: selectedCustomerRental.id,
                        DateReturned: Ext.getCmp('edit-customerrental-returndate').getValue(),
                        MovieId: selectedCustomerRental.movieId
                    }

                    Ext.Ajax.request({
                        url: '/api/customerrental/',
                        method: 'PUT',
                        headers: { "Content-Type": "application/json" },
                        jsonData: dto,
                        success: function (response) {
                            var modal = Ext.getCmp('modal-edit-customerrental');
                            var customerRentalStore = modal.viewModel.storeInfo.customerRentalStore;
                            customerRentalStore.loadPage(1);

                            var winmodal = Ext.getCmp('modal-edit-customerrental-returndate');
                            winmodal.close();
                        }
                    });
                }
            }]
        });

        win.show();
    }

});

function refreshGridStoreRental() {
    var grid = Ext.getCmp('grid-rentals');
    var search = grid.up().viewModel.data.search;

    grid.store.getProxy().setExtraParams({
        search: search
    });

    grid.store.loadPage(1);
}

function transactRental(rental, url, method, modalId) {
    Ext.Ajax.request({
        url: url,
        method: method,
        headers: { "Content-Type": "application/json" },
        jsonData: rental,
        success: function (response) {
            refreshGridStoreRental();

            if (modalId) {
                var modal = Ext.getCmp(modalId);
                modal.close();
            }
        }
    });
}
