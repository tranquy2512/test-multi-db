var express = require('express');
var router = express.Router();

const { Catalog } = require('../models/catalog');
const { User } = require('../models/user');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const cat = await Catalog.findAll();
  const user = await User.findAll();
  res.status(200).json({
    cat, user
  })
});

module.exports = router;
