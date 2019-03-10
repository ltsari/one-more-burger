const mongoose = require ("mongoose");
const bcrypt =  require ("bcrypt");
const salt = 9;
const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    first_name:String,
    lust_name:String,
    password:String,
    address:String,
    role:{           
        type:Number, //1 admin
        default:2    //2 client
    }
})

const User = new mongoose.model("User",UserSchema);

module.exports = User;

module.exports.register = (data,callback)=>{
    let newUser = new User(data);
    bcrypt.hash(data.password,salt,(err,hash)=>{
        if (err) return callback(err);
        else {
            let userData = data;
            userData.password = hash;
            let newUser = new User(userData);
            newUser.save(callback)
        }
    })
}