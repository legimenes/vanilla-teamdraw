const pgp = require('pg-promise')();
const { dbconnection } = require('../../config');

const connection = pgp(dbconnection);

module.exports = connection;
