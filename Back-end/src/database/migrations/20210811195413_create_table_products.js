exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id')
    table.text('titulo').notNullable()
    table.text('autor').notNullable()
    table.text('edicao')
    table.text('editora')
    table.text('isbn').notNullable()
    table.text('negociavel').notNullable()
    table.text('genero')
    table.float('preco').notNullable()
    table.text('estado').notNullable()
    table.text('link').notNullable()

    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('products')
