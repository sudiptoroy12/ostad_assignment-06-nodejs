
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
                    <hr>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is the main landing page of our Node.js HTTP server.</p>
                </body>
             
            </html>`)
        res.end()
      
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(`
            <html>
              <head><title>About Page</title></head>
              <body>
                   <nav>
                       <a href="/">Home</a> | 
                       <a href="/about">About</a> | 
                       <a href="/contact">Contact</a>
                    </nav>
                    <hr>
                    <h1>About Us</h1>
                    <p>Learn more about our journey, vision, and the team behind this application.</p>
                    
                </body>
             
            </html>`)
        res.end()
      
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