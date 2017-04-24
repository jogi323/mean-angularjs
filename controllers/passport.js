var passport=require("passport");
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var controller=require("./userActions");
var connection = require("./userProfileSchema");
var secret=require('./secret');
//console.log("326547967496edfs");
module.exports=function(passport){
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = "123456";
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
    connection.findById({_id: jwt_payload._doc._id}, function(err, user) {
        console.log("bjhghjgfujhgjuguy");
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
}));
}