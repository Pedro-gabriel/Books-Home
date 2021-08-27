exports.up = knex => knex.schema.createTable('desejo', table =>{
    table.increments('id').primary();
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
    table.integer('products_id').references('products.id').notNullable().onDelete('CASCADE');

    table.timestamps(true, true);

    
})

exports.down = knex => knex.schema.dropTable('desejo')

