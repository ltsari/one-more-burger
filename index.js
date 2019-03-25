//import library
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//dafault server settings
const PORT = 8000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//database connection
const DB = require ("./db_settins");
mongoose.connect(DB.dev, {useNewUrlParser:true})

//models
const User = require("./models/Users");             



//middlewares


//router
app.get("/",(req,res)=>{
})

//user registration
app.post("/api/register", (req,res)=>{
    User.register(req.body,(err)=>{
        if(err) res.status(500).send(err);
        else return res.status(200).send({status:"success"})
    })
})

app.post("/api/login",(req,res)=>{
    User.login(req.body,(err,user)=>{
        if(err) return res.status(500).send(err);
        if(!user) return res.status(401).send({statu:"failed"});
        return res.status(200).send(user);
    })
})

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log("Host is running on port:",PORT);
})