const express = require('express');
const debug= require('debug')('app:adminRouter');
const {MongoClient}= require('mongodb')
const adminRouter= express.Router();
const products= require('../data/products.json');

adminRouter.route('/').get((req,res)=>{
const url='mongodb+srv://mohamedmahrous:l1JN5ct0Q4DL5lWA@globomantics.rzpgu.mongodb.net?retryWrites=true&w=majority';
const dbName='Globomantics';

( async function mongo(){
  let client;
  try {
    debug('Connected to DB1111111.');
    client=await MongoClient.connect(url);
debug('Connected to DB.');
const db=client.db(dbName);
const responseProducts=await db.collection('products').insertMany(products);
const responseUsers=await db.collection('users').insertMany([
  {ID:1,Name:'Mohamed1',Email:'m1.m@m.com',password:'12345'},
  {ID:2,Name:'Mohamed2',Email:'m2.m@m.com',password:'12345'},
  {ID:3,Name:'Mohamed3',Email:'m3.m@m.com',password:'12345'},
  {ID:4,Name:'Mohamed4',Email:'m4.m@m.com',password:'12345'},
  {ID:5,Name:'Mohamed5',Email:'m5.m@m.com',password:'12345'}]);

res.json(response);
  } catch (error) {
    debug(error.stack);
  }
  client.close();
}())
});

  module.exports = adminRouter;