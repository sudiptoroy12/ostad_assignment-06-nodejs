
const http = require("http")

const server = http.createServer((req,res)=>{

    res.write("server start")
    res.end()

})

const PORT = 5000
server.listen(PORT, ()=>{
    console.log(`server started successfully on port ${PORT}`);

    
})