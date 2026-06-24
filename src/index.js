
//? express js -> backend framework for node  --> handle errors by own , and if error comes then it gives default error
 // get /users -> handler
 // post / users -> handler 
//* fast, unopiniated minimalist web framework for node .js
import http from "http";
 import express from "express";

 //* creating express app instance 
 const app = express();

 //* creating http server 

 const server = http.createServer(app); 

 //* home -> get , / => <h1> HOme page </h1>
 //? app.get (path, handler)

 app.get("/", (req, res)=>{
    res.send("<h1> HOME PAGE </h1>")

 })

 //* get all users

 app.get ("/users", (req, res)=>{
    res.send("<h1> all users </h1>")
 });
 


 

 //ip -> machine/system's logical address  (198.168.1.1:1112 ) where (:11112 -> port of platform/server )

 // 
 server.listen(8080, "localhost", ()=>{ // 8080 -> port
    // localhost ip address  -> 127.0.0.1 ( address of local server) 
    console.log(`server is running at http://localhost:8080`)
    console.log("press ctrl+c to close the server");
 })
