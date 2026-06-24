
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

 //! CRUD users
 //* get all users

 app.get ("/users", (req, res)=>{
       // res.send("<h1> all users </h1>")
        res.json ({
        message: "all users",
        success: "true",
        data:[{
            _id:1,
            name: "john Doe",
            email: "j@gmail.com"

        }]
    })
       })

   //* get users by id 
   //users/100 => {id:100}
   //users/123 => {id:123}
   //users/1 => {id:1}
       //posts/:userId/:postId => /post/1/2 => {postId:2, userId:1}
   app.get ("/users/:id", (req, res)=>{
    //req.params => {} => {id:1}
    //console.log(req.params)


const id = req.params.id;

    res.json ({
        message: `user by id ${id} fetched`,
        success: "true",
        data:[{
            _id:id,
            name: "john Doe",
            email: "j@gmail.com"

        }]
    })

    })
    // res.send("<h1> all users </h1>")


 //*create 
 app.post( "/users/",(req, res)=>{




        res.json({
        message: "user updated",
        success: "true",
        data: {
            _id:1,
            name: "john Doe",
            email: "j@gmail.com"

        }
 });

 })
    // res.send("<h1> Users created </h1>")
  

 //*update
 app.put ("/users/:id", (req, res)=>{

const id = req.params.id;

    res.json({
        message: "user updated",
        success: "true",
        data: {
            _id:id,
            name: "john Doe",
            email: "j@gmail.com"

        }
 });
    // res.send ("<h1> users created </h1>")
})

 //* Delete
 app.delete( "/users/:id", (req, res)=>{

const id = req.params.id;

    res.json({
        message: "user deleted",
        success: "true",
        data: {
            _id:id,
            name: "john Doe",
            email: "j@gmail.com"

        }
 });
    // res.send ("<h1> Users deleted </h1>")
 });

 //! crud products 
 
 

 app.get ("/product", (req, res)=>{
    res.send ("<h1> All products </h1>")
 });


 //* get by id 
 app.get( "product/:id", (req,res)=>{

    const id = req.params.id;

    res.json ({
        message: `product by id ${id} fetched`,
        success: "true",
        data:[{
           _id : id,
            name: "mobile",
            price : "1200"

        }]
    })

    })


 //*create
  app.post ("/product", (req, res)=>{
    // res.send ("<h1> product created </h1>")
  
        res.json({
        message: " product updated",
        success: "true",
        data: {
            _id:1,
            name: "mobile ",
            price : "30000"

        }
 });



    
    })


//* update
 
  app.put ("/product", (req, res)=>{
    // res.send ("<h1> product updated </h1>")
    const id = req.params.id;

        res.json({
        message: " product created",
        success: "true",
        data: {
            _id:id,
            name: "mobile ",
            price : "30000"

        }
 });
 });

 //* delete
  app.delete ("/product", (req, res)=>{
    // res.send ("<h1> product deleted </h1>")
    const id = req.params.id;

        res.json({
        message: " product deleted",
        success: "true",
        data: {
            _id:id,
            name: "mobile ",
            price : "30000"

        }
 });
 });


 

 //ip -> machine/system's logical address  (198.168.1.1:1112 ) where (:11112 -> port of platform/server )

 // 
 server.listen(8080, "localhost", ()=>{ // 8080 -> port
    // localhost ip address  -> 127.0.0.1 ( address of local server) 
    console.log(`server is running at http://localhost:8080`)
    console.log("press ctrl+c to close the server");
 })
