var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller=require("../controllers/userActions");

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  controller.register(req,res);
});
router.post('/signin', function(req, res, next) {
  controller.login(req,res);
});
router.post('/logOut', function(req, res, next) {
  res.json({msg:'Logged out.'})
});
router.get('/user', function(req, res, next) {
  controller.allUsers(req,res);
});
router.post('/deleteuser/:id', function(req, res, next) {
 controller.deleteUser(req,res);
});
module.exports = router;
