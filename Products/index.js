const express = require('express');
const chalk = require('chalk');
const debug= require('debug')('app');
const morgan=require('morgan');
const path=require('path');
const { title } = require('process');
const req = require('express/lib/request');

const productRouter=require('./src/routers/productsRouter');
const adminRouter=require('./src/routers/adminRouter');

const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));



const port = process.env.PORT || 3000


app.set('views','./src/views');
app.set('view engine','ejs');


app.use('/products', productRouter);
app.use('/admin', adminRouter);

app.get('/home', (req, res) => {
  res.render('index',{title:' EJS!', data:['a','b','v']});
})
app.get('/', (req, res) => {
  res.render('index',{title:' EJS!', data:['a','b','v']});
})

app.listen(port, () => {
  debug(`Example app listening on port ${chalk.green(port)}` );
})