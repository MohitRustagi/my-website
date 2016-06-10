var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* return my resume */
router.get('/download-resume/', function(req, res) {
  res.download('public/MohitRustagi_Resume.pdf');
});	 

module.exports = router;
