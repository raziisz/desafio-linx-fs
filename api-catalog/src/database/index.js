
require('dotenv').config();
const knexfile = require('../../knexfile');


let envi = String(process.env.NODE_ENV).trim() || "development";

const knex = require('knex')(knexfile[envi]);

module.exports = knex;