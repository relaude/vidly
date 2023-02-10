Ext.define('Vidly.Movies.MovieModel', {
    extend: 'Vidly.model.Base',

    idProperty: 'id',

    fields: [
        { name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' },
        { name: 'genre_Id', type: 'int' },
        { name: 'genre', type: 'string' },
        { name: 'rentFee', type: 'float' },
        { name: 'stock', type: 'int' }
    ]
});
