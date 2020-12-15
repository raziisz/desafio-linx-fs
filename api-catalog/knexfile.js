// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
  test: {
    client: process.env.DB_DIALECT,
    connection: {
      filename: `${__dirname}/__tests__/database.sqlite`
    }
  }
};
