exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('username'),
    table.text('login').unique().notNullable(),
    table.text('senha'),
    table.text('email').unique().notNullable(),
    table.text('cpf').unique().notNullable(),
    table.text('telefone'),
    table.text('cep'),
    table.text('endereco').notNullable(),
    table.text('complemento'),
    table.text('numero'),
    table.text('linkwhatsapp').notNullable()


    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('update_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('users')
