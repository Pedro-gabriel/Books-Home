exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {titulo: 'Fogo', autor: 'Bruno', descricao:'livro comum',quantidade:'5', edicao: '2021', editora:'com', isbn:'1233344ccd', negociavel: 'sim', genero:'drama', estado: 'confia', user_id: '1'},
      ]);
    });
};