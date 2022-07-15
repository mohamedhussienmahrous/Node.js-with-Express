
const express = require('express');
const productRouter= express.Router();
const debug= require('debug')('app:productRouter');
const {MongoClient , Int32}= require('mongodb')
const products= require('../data/products.json');

productRouter.route('/').get((req,res)=>{
  const url='mongodb+srv://mohamedmahrous:l1JN5ct0Q4DL5lWA@globomantics.rzpgu.mongodb.net?retryWrites=true&w=majority';
const dbName='Globomantics';

( async function mongo(){
  let client;
  try {
    debug('Connected to DB1111111.');
    client=await MongoClient.connect(url);
debug('Connected to DB.');
const db=client.db(dbName);
const products=await db.collection('products').find().toArray();
res.render('products',{products});
  } catch (error) {
    debug(error.stack);
  }
  client.close();

})();
   
  });


  productRouter.route('/:id').get((req,res)=>{
    const id=req.params.id;
    const url='mongodb+srv://mohamedmahrous:l1JN5ct0Q4DL5lWA@globomantics.rzpgu.mongodb.net?retryWrites=true&w=majority';
    const dbName='Globomantics';
    
    ( async function mongo(){
      let client;
      try {
        debug('Connecting to DB.');
        client=await MongoClient.connect(url);
    debug('Connected to DB.');
    const db=client.db(dbName);
    const product=await db.collection('products').findOne({ID: new Int32(id)});
    res.render('product',{product});
      } catch (error) {
        debug(error.stack);
      }
      client.close();
    
    })();
    
  });

  module.exports = productRouter;