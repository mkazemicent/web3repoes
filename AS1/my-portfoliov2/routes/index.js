// Mohammad Kazemi 301313841  COMP229 - Web Application Development Assignment 1 index.js file
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

module.exports = router;
