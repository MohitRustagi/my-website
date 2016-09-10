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


/*contact us form */
router.post('/form/', function(req, res) {
  var name = req.body.name,
      phone = req.body.phone,
      email = req.body.email
      message = req.body.mesage;
  
  if(name and phone and email and message) {
  	
  }
      
console.log(res);
debugger;
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
