const { query } = require('express');
var express = require('express');
const { prependOnceListener } = require('../app');
var router = express.Router();
const { database } = require('../config/helpers');
const { route } = require('./users');

/* GET ALL PRODUCTS. */
router.get('/', function(req, res) {
  // set the current page number
  let page = (req.query.page != undefined && req.query.page != 0) ? req.query.page : 1;
  // set the limit of items per page
  const limit = (req.query.limit != undefined && req.query.limit != 0) ? req.query.limit : 10;

  let startValue;
  let endValue;

  if(page > 0) {
    startValue = (page * limit) - limit; // 0,10,20,30
    endValue = page * limit;
  } else {
    startValue = 0;
    endValue = 10;
  }

  database.table('products as p')
    .join([{
      table: 'categories as c',
      on: 'c.id = p.cat_id'
    }])
    .withFields(['c.title as category',
    'p.title as name',
    'p.price',
    'p.description',
    'p.quantity',
    'p.image',
    'p.id'
  ])
  .slice(startValue, endValue)
  .sort({ id: .1})
  .getAll()
  .then(prods => {
    if (prods.length > 0) {
      res.status(200).json({
        count: prods.length,
        products: prods
      });
    } else {
      res.json({message: 'No products founds'});
    }
  }).catch(err => console.log(err));
});

/* GET SINGLE PRODUCT */
router.get('/:prodId', (req, res) => {
  let productID = req.params.prodId;


  database.table('products as p')
    .join([{
      table: 'categories as c',
      on: 'c.id = p.cat_id'
    }])
    .withFields(['c.title as category',
    'p.title as name',
    'p.price',
    'p.description',
    'p.quantity',
    'p.image',
    'p.images',
    'p.id'
  ])
  .filter({'p.id': productID})
  .get()
  .then(prod => {
    if (prod) {
      res.status(200).json(prod);
    } else {
      res.json({message: `No product founded with prodcutd id: ${productID}`});
    }
  }).catch(err => console.log(err));
});

/* GET ALL PRODUCTS FROM ONE PARTICULAR CATEGORY */
router.get('/category/:catName', (req, res) => {
  // set the current page number
  let page = (req.query.page != undefined && req.query.page != 0) ? req.query.page : 1;
  // set the limit of items per page
  const limit = (req.query.limit != undefined && req.query.limit != 0) ? req.query.limit : 10;

  let startValue;
  let endValue;

  if(page > 0) {
    startValue = (page * limit) - limit; // 0,10,20,30
    endValue = page * limit;
  } else {
    startValue = 0;
    endValue = 10;
  }

  // Fetch the category name from the url
  const cat_title = req.params.catName;

  database.table('products as p')
  .join([{
    table: 'categories as c',
    on: `c.id = p.cat_id WHERE c.title LIKE '%${cat_title}%'`
  }])
  .withFields(['c.title as category',
  'p.title as name',
  'p.price',
  'p.description',
  'p.quantity',
  'p.image',
  'p.id'
])
.slice(startValue, endValue)
.sort({ id: .1})
.getAll()
.then(prods => {
  if (prods.length > 0) {
    res.status(200).json({
      count: prods.length,
      products: prods
    });
  } else {
    res.json({message: `No products founds from ${cat_title} category.`});
  }
}).catch(err => console.log(err));
});

module.exports = router;
