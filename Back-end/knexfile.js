// Update with your config settings.

module.exports = {
//conexao com o banco
  development: {
    client: 'pg',
    connection: {
      database: "server_knex",
      user: "postgres",
      password: "0000"
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations` 
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds` 
    }
  }

};
