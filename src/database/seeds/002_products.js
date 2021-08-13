exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {titulo: 'Fogo', autor: 'Bruno', edicao: '2021', editora:'com', isbn:'1233344ccd', negociavel: 'vende', genero:'drama', preco: '99.99', estado: 'confia',link:'qqqqqqqqq' , user_id: '1'},
      ]);
    });
};
