const { log } = require("console")
const http = require("http")

const server = http.createServer((req,res)=>{

    res.write("server start")
    res.end()

})

server.listen(5000, ()=>{
    console.log("server started successfully on port 5000");
    
    
})