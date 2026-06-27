
//? express js -> backend framework for node  --> handle errors by own , and if error comes then it gives default error
 // get /users -> handler
 // post / users -> handler 
 

 // http://localhost8080/users/1?       //where ? -> query parameter and / dekhi paxadi ko route
  //http://localhost8080/users?name=john&page=1&limit=10

 // req.params -> {}
 // req.query -> {} --> used in filter, search {name:"john",page:"1",limit:"10"}
 // req.body -> {}
 //post /users =>  req.body
//* fast, unopiniated minimalist web framework for node .js
import http from "http";
 import express from "express";
 import userRoutes from "./routes/user.routes.js"
 import productRoutes from "./routes/product.routes.js"

 //* creating express app instance 
 const app = express();

 //* creating http server 

 const server = http.createServer(app); 
 app.use(express.json()) // parse the string and attached on current req.body




 //* home -> get , / => <h1> HOme page </h1>
 //? app.get (path, handler)

 app.get("/", (req, res)=>{
    // res.send("<h1> HOME PAGE </h1>")
    res.status(200).json({
        message: "server is up & running"
    });

 })

 
//     res.json({
//         message: "user deleted",
//         success: "true",
//         data: {
//             _id:id,
//             name: "john Doe",
//             email: "j@gmail.com"

//         }
//  });
//     // res.send ("<h1> Users deleted </h1>")
//  });
//! using routes
 app.use("/users", userRoutes);
 app.use("/products", productRoutes);

 //! crud products 
 

 //ip -> machine/system's logical address  (198.168.1.1:1112 ) where (:11112 -> port of platform/server )

 // 
 server.listen(8080, "localhost", ()=>{ // 8080 -> port
    // localhost ip address  -> 127.0.0.1 ( address of local server) 
    console.log(`server is running at http://localhost:8080`)
    console.log("press ctrl+c to close the server");
 })


 //* Rest api

 //? REST -> Representational state transfer
//? api ->  application programming interface


//* stateless - request should not managed by server --> request send information (autorized token ) should come along request
//* client-server architecture -> client and server should be diff
//* layered architecture

// client - cdn, proxy , loadbalancer ... -server

//* cacheable response -> 
// cache-control 


//! Rules;  
// * uniform interface
//? route naming
//? use noun 
// get /users
// post / users
//? use meaningful http methods => GET, POST , PUT, PATCH , DELETE
//? use meaningful response status code ->
//! 100 -199 -> informational 
//! 200-299 -> success ,
// 200 -> ok , 201 -> created
//! 300 - 399 -> redirectional
//! 400 - 499 -> client side error , , 404 
// 400 -> bad request
// 401 -> unauthorized
// 403 -> forbidden
// 404 -> NOT FOUND
//! 500- 599 -> server side error, 
// 500 -> internal server error  ,
//  502 -> bad gateway
//* Note - lool this at http response status code Mmdn


//! endpoint 
//*  get /users
//* get /users/1

//! resource

// /dashboard => {}
    // users => json, html, xml
    




