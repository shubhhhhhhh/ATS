const express  = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Route = require("./src/routes/routes");

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req,res,next)=>{                                           
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Method","GET,POST,PUT,DELETE,OPTIONS")
    res.setHeader("Access-Control-Allow-Headers","Content-Type")
    res.setHeader("Access-Control-Allow-Credentials",true)
    next();
})

app.use(express.json());
app.use('/v1',Route)

module.exports = app ;