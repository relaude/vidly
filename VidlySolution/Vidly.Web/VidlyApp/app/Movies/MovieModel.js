Ext.define('Vidly.Movies.MovieModel', {
    extend: 'Vidly.model.Base',

    idProperty: 'id',

    fields: [
        //'id', 'movie', 'genre', 'genre_id', 'rentFee', 'stock'
        { name: 'id', type: 'int', persist: false },
        //{ name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'genre_Id', type: 'int' },
        { name: 'genre', type: 'string' },
        { name: 'rentFee', type: 'float' },
        { name: 'stock', type: 'int' }
    ]
});
