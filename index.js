
const http = require("http")

const server = http.createServer((req,res)=>{

    if(req.url === "/" || req.url === "/home"){
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(`
            <html>
              <head><title>Home Page</title></head>
              <body>
                   <nav>
                       <a href="/">Home</a> | 
                       <a href="/about">About</a> | 
                       <a href="/contact">Contact</a>
                    </nav>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is the main landing page of our Node.js HTTP server.</p>
                </body>
             
            </html>`)
      
    }

    else{
         res.write("server start")
         res.end()
    }

   

})

const PORT = 5000
server.listen(PORT, ()=>{
    console.log(`server started successfully on port ${PORT}`);

    
})