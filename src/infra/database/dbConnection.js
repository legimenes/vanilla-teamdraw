const pgp = require('pg-promise')();
require('dotenv').config();

const connection = pgp(process.env.DBCONNECTION);

module.exports = connection;
