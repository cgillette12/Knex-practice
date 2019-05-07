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

function paginated(pageNumber){
  const productsPrePage = 6;
  const offset = productsPrePage *(pageNumber-1);
  knexInstance('shopping_list')
    .select('id','name','price')
    .limit(productsPrePage)
    .offset(offset)
    .then(results => {
      console.log(results);
    });
}
paginated(4);


function sumItemCategories() {
  knexInstance('shopping_list')
    .select('category')
    .count('name AS items')
    .sum('price AS total')
    .select(knexInstance.raw('ROUND(AVG(price), 2) AS average'))
    .groupBy('category')
    .then(result=>{
      console.log(result);
    });
} 

sumItemCategories();

function costPerCategory() {
  knexInstance('shopping_list')
    .select('category')
    .sum('price as total')
    .groupBy('category')
    .then(result => {
      console.log(result);
    });
}

costPerCategory();