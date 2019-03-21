var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //get data from db, and then send through routes to the index.hbs pan=ge and render that
  connect.query(`SELECT name, avatar FROM hero`,(err, result) =>{
    if(err){
      throw err;
      console.log(err);
    }
    else{
      console.log(result);
      res.render('index', { avatars: result });
    }
  });
  //res.render('index', { title: 'Express' });
});

//get bio of image hero
router.get('/:hero', function(req, res, next) {
  //get data from db, and then send through routes to the index.hbs pan=ge and render that
  connect.query(`SELECT name, avatar FROM hero WHERE name="${req.params.hero}"`,(err, result) =>{
    if(err){
      throw err;
      console.log(err);
    }
    else{
      console.log(result);
      res.render('bio', { bioData: result[0]});
    }
  });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
