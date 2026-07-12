
const http = require("http")
const fs = require("fs")
const path = require("path")


const navbar = `
            <nav style="background-color: #1a252f; padding: 20px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <a href="/" style="color: #00d2d3; text-decoration: none; font-weight: bold; margin: 0 15px; font-size: 18px; transition: 0.3s;">Home</a> 
            <a href="/about" style="color: #ffffff; text-decoration: none; font-weight: bold; margin: 0 15px; font-size: 18px; transition: 0.3s;">About</a> 
            <a href="/contact" style="color: #ffffff; text-decoration: none; font-weight: bold; margin: 0 15px; font-size: 18px; transition: 0.3s;">Contact</a>
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
                    <div style="max-width: 800px; margin: 50px auto; padding: 40px; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
            
                        <!-- Nodejs -->
                        <div style="width: 200px; height: 200px; background: linear-gradient(45deg, #1a252f, #00d2d3); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                        Nodejs
                        </div>

                        <h1 style="color: #1a252f; font-size: 36px; margin-bottom: 10px;">Welcome to the Home Page</h1>
                        <p style="color: #7f8c8d; font-size: 18px; max-width: 600px; margin: 0 auto 30px;">
                          This is the main landing page of our awesome Node.js HTTP server.
                        </p>
                    </div>
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