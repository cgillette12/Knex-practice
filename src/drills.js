'use strict';
require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});
console.log('connetion successful');

function searchItemsbyName(searchTearm){
  knexInstance('shopping_list')
    .select('*')
    .where('name','ILIKE',`%${searchTearm}%`)
    .then(results => {
      console.log(results);
    });
}
searchItemsbyName('Fish');