const router = require('express').Router();
const Sample = require('./sample.controller');

router 
  .route('/getData')
  .get(Sample.getAll)

  module.exports = router;