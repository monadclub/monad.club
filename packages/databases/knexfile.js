require('dotenv').config();

module.exports = exports.default = {
	client: 'postgresql',
	connection: process.env.PG_CONNECTION_STRING,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
