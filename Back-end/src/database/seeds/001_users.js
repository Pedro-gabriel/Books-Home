exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Robertinho', login: 'dogelo', senha: '1voto', email:'vereador@gmail.com', cpf:'123.123.123.12', telefone:'12111-1111', cep:'000000-000',endereco:'joenvile', complemento:'perto da rua vitoria', numero:'(99) 00000-0000', linkwhatsapp:'lalalalalal'},
        {username: 'motomoto', login: 'ze', senha: '10voto', email:'vereador2@gmail.com', cpf:'123.123.345.12', telefone:'12111-1341', cep:'000900-000', endereco:'joenwwle', complemento:'rua de baixo', numero:'(00) 99999-9999' , linkwhatsapp:'asdasddasdd'}
      ]);
    });
};