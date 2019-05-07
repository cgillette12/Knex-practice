'use strict';
require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});
console.log('connetion successful');


// function search(searchTearm) {

//   knexInstance('amazong_products')
//     .first('product_id', 'name', 'price', 'category')
//     .where('name', 'ILIKE', `%${searchTearm}%`)
//     .then(result => {
//       console.log(result);
//     });
// }
// search('holo');

function paginateProducts(page){
  const productsPrePage = 10;
  const offset = productsPrePage * (page - 1);
  knexInstance('amazong_products')
    .select('product_id', 'name', 'price', 'category')
    .limit(productsPrePage)
    .offset(offset)
    .then(results => {
      console.log(results);
    });
}

paginateProducts(2);