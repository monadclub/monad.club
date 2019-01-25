require("dotenv").config();

// eslint-disable-next-line no-multi-assign
module.exports = exports.default = {
  // Use sqlite3 in test env
  test: {
    client: "sqlite3",
    connection: ':memory:', 
  },

  developent: {
    client: "postgresql",
    connection: process.env.PG_CONNECTION_STRING,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.PG_CONNECTION_STRING,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
