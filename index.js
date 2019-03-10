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
    res.send("You want to create user");
})

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log("Host is running on port:",PORT);
})