
const http = require("http")
const fs = require("fs")
const path = require("path")


const navbar = `
            <nav>
                <a href="/">Home</a> | 
                <a href="/about">About</a> | 
                <a href="/contact">Contact</a>
            </nav>
            <hr>`

            
const newfolder = path.join(__dirname, "pages")

if(!fs.existsSync(newfolder)) fs.mkdirSync(newfolder)

const server = http.createServer((req,res)=>{

    if(req.url === "/" || req.url === "/home"){

         fs.writeFile(path.join(newfolder, "home.html") , `
            <html>
              <head><title>Home Page</title></head>
              <body>
                   ${navbar}
                    <h1>Welcome to the Home Page</h1>
                    <p>This is the main landing page of our Node.js HTTP server.</p>
                </body>
             
            </html>` , ()=>{
            console.log("Home page created");
            
        })
         fs.readFile(path.join(newfolder, "home.html"), "utf8" ,(err, data)=>{
         res.writeHead(200, {"content-type" : "text/html"})
         res.write(`${data}`)    
         res.end()  
        })

        
      
    }
    else if(req.url === "/about"){
        fs.writeFile(path.join(newfolder, "about.html"), `
            <html>
              <head><title>About Page</title></head>
              <body>
                   ${navbar}
                    <h1>About Us</h1>
                    <p>Learn more about our journey, vision, and the team behind this application.</p>
                    
                </body>
             
            </html>` , ()=>{
                console.log("About page created");
                
            } )
        fs.readFile(path.join(newfolder, "about.html"), "utf8", (err,data)=>{
            res.writeHead(200, {"content-type" : "text/html"})
            res.write(`${data}`)
            res.end() 
        })
       
      
    }
    else if(req.url === "/contact"){
           fs.writeFile(path.join(newfolder, "contact.html"), `
            <html>
              <head><title>Contact Page</title></head>
              <body>
                   ${navbar}
                    <h1>Contact Page</h1>
                    <p>Feel free to reach out to us via email or our social media handles.</p>
                    <h2>Name : Sudipto Roy</h2>
                    <p>Contact No : 01794197740 </p>
                    <p>Email : sudipto1294@gmail.com </p>
                    
                </body>
             
            </html>` , ()=>{
                console.log("Contact page created");
                
            } )

        fs.readFile(path.join(newfolder, "contact.html"), "utf8", (err,data)=>{
            res.writeHead(200, {"content-type" : "text/html"})
            res.write(`${data}`)
            res.end() 
        })
      
    }

    else{
        res.writeHead(404, {"content-type" : "text/html"})
        res.write(`
            <html>
                <head><title>404 - Not Found</title></head>
                <body>
                    ${navbar}
                    
                    <h1 style="color: red;">404 - Page Not Found</h1>
                    <p>Oops! The page you are looking for does not exist.</p>
                </body>
            </html>
            `)
         res.end()   
         
    }

   

})

const PORT = 5000
server.listen(PORT, ()=>{
    console.log(`server started successfully on port ${PORT}`);

    
})