//import library
const express = require("express");
const express = require("mongoose");
const express = require("body-parser");
const cors = requier("cors");

//dafault server settings
const PORT = 8000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//database connection


//middlewares


//routes
const app = express();
app.get("/",(req,res)=>{
})


app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log("Host is running on port:",27017);
})