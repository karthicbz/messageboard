var express = require('express');
var router = express.Router();
const messages = require('../Messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {msg: messages});
});

router.get('/new', (req, res)=>{
  res.send('New Message');
})

module.exports = router;
