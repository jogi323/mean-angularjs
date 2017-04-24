var mongoose = require('mongoose');
var bcrypt=require('bcryptjs');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://jogi:jogi@ds147799.mlab.com:47799/meanangular');
var userregisterSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    email: {type:String,required:true},
    password:String,
    mobileNumber:Number,
    gender:String,
    dob : Date,
    username:String,
    address:String,
    pancardNumber:String,
    aadharcardNumber:Number,
    image:String,
    empId:String,
    dob:Date,
    otp:{type:String, expireAfterSeconds: 300 }
   });


// console.log("connected to database");
var user = mongoose.model("User",userregisterSchema);
// exports.getUserById=function(id,callback){
//     User.findById(id,callback);
// }
// exports.getUserByUsername=function(username,callback){
//     var query={username:username};
//     User.findOne(query,callback);
// }
// module.exports.addUser=function(newUser,callback){
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//         if(err){
//             throw err;
//         }else{
//             newUser.password=hash;
//             newUser.save(callback);
//         } 
//         // Store hash in your password DB. 
//     });
// });
// }
// exports.comparePassword=function(candidatePassword,hash,callback){
//     bcrypt.compare(candidatePassword,hash,function(err,isMatch){
//         if(err) throw err;
//         callback(null,isMatch);
//     })
// }
module.exports = user;