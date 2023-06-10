var express = require('express');
var router = express.Router();
const messages = require('../Messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Message Board', msg: messages});
});

router.get('/new', (req, res)=>{
  res.render('newMessage', {error:''});
});

router.post('/new', (req, res)=>{
  if(req.body.userName && req.body.userMessage){
    messages.push({text:req.body.userMessage, user:req.body.userName, added: new Date});
    res.redirect('/');
  }else{
    res.render('newMessage', {error: 'name and message must not be empty', userName: req.body.userName, userMessage: req.body.userMessage});
    res.redirect('/new');
  }
  // res.redirect('http://localhost:3000');
});

module.exports = router;
