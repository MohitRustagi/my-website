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

router.get('/analytics/main/', function(req, rest) {
  console.log(process.env.NODE_ENV);
  res.send({'message': 'hey'});
});


module.exports = router;
