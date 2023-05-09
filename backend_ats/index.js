const env = require("dotenv").config({path:".env"})
const server = require("./app") ;
const port = process.env.PORT ;
const host = process.env.HOST ; 

server.listen(port,host,()=>{
    console.log(`server established successfully at http://${host}/${port}`)
})
