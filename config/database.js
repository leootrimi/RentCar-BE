require('dotenv').config();
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: process.env.DB_PATH || './mydb.sqlite',
  },
  useNullAsDefault: true,
});

module.exports = knex;