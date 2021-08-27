exports.up = knex => knex.schema.createTable('products', table => {
    table.increments('id').primary();
    table.text('titulo').notNullable();
    table.text('autor').notNullable();
    table.text('descricao');
    table.text('estado').notNullable();
    table.text('telefone');
    table.timestamps(true, true);
})

exports.down = knex => knex.schema.dropTable('products')