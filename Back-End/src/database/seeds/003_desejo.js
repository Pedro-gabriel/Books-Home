exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('desejo').del()
    .then(function () {
      // Inserts seed entries
      return knex('desejo').insert([
        {products_id:'1', user_id:'1'},
      ]);
    });
};