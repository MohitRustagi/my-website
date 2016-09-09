var express = require('express');
var router = express.Router();
var path = require('path');
// var settings = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* return my resume */
router.get('/download-resume/', function(req, res) {
  res.download('public/MohitRustagi_Resume.pdf');
});	 


// /* analytics */
// router.post('/main/', function(req, res) {
//   var ip = req.headers['x-forwarded-for'] || 
//            req.connection.remoteAddress || 
//            req.socket.remoteAddress ||
//            req.connection.socket.remoteAddress;
  
//   res.send({'success': 'true'});
//   console.log(req);
// });


module.exports = router;
