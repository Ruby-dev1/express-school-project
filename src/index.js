
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

 //* creating express app instance 
 const app = express();

 //* creating http server 

 const server = http.createServer(app); 
 app.use(express.json()) // parse the string and attached on current req.body

 const users = [];
 const products = [];

 //* home -> get , / => <h1> HOme page </h1>
 //? app.get (path, handler)

 app.get("/", (req, res)=>{
    res.send("<h1> HOME PAGE </h1>")

 })

 //! CRUD users
 //* get all users

 app.get ("/users", (req, res)=>{
       // res.send("<h1> all users </h1>")
       const query = req.query;
       console.log(query);
        res.json ({
        message: "all users",
        success: "true",
        data: users,
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
    const {id} = req.params;
    const user = users.find((user)=> user._id=== Number(id))

    if(!user){
        res.json({
            message:"users not found",
            success: false,
            data: null
        });
        return

    }


// const id = req.params.id;

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


    // console.log(req.body);
    const {name, email, password} = req.body;
    users.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        _id:users.length +1 ,
    });

        res.json({
        message: "user updated",
        success: "true",
        data: users[users.length -1],
 });

 })
    // res.send("<h1> Users created </h1>")
  

 //*update
 app.put ("/users/:id", (req, res)=>{

// const id = req.params.id;
const {id} = req.params;
const {name, email, password} = req.body;
const index = users.findIndex((user)=> user._id === Number(id));

if(index=== -1){
    res.json({
        message: "user not found",
        success: false,
        data: null,
    });
    return ;

    users[index]={
        ...users[index],
        name,
        email,
        password,
    };
}

    res.json({
        message: "user updated",
        success: "true",
        data: users[index],
            
        
 });
    // res.send ("<h1> users created </h1>")
})

 //* Delete
 app.delete( "/users/:id", (req, res)=>{

// const id = req.params.id;
const {id} = req.params;
const index = users.find((user)=> user._id === Number(id));

if(index === -1){
    res.json({
        message: "user not found",
        scucess: false,
        data: null,
    });
    return;
}
    users.splice(index,1);
    res.json({
        message: "user deleted",
        success: true,
        data: null,
    });
});

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

 //! crud products 
 //* get all products

 

 app.get ("/products", (req, res)=>{
     const query = req.query;
       console.log(query);
        res.json ({
        message: "all products",
        success: "true",
        data: products,
       })
    
 });


 //* get by id 
 app.get( "/products/:id", (req,res)=>{

    // const id = req.params.id;
    const {id} = req.params;
    const product = products.find((product)=> product._id === Number(id))

    if(!product){
        res.json({
            message:"product not found",
            success: false,
            data: null,
        });
        return;
    }

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
  app.post ("/products", (req, res)=>{
    // res.send ("<h1> product created </h1>")
    const {name, price} = req.body;
    products.push({
        name,
        price,
        
        createdAt: new Date (Date.now()),
        _id:products.length +1 ,
    });

  
        res.json({
        message: " product updated",
        success: "true",
        data: products[products.id -1]
 });



    
    })


//* update
 
  app.put ("/products/:id", (req, res)=>{
    // res.send ("<h1> product updated </h1>")
    // const id = req.params.id;
    const {id} = req.body;
    const {name, price} = req.body;
    const index = products.findIndex((product) => product._id);

    if(index === -1){
        res.json({
            message: "product not found",
            success: false,
            data: null,
        })
        return; 
    }
    products[index]={
        ...products[index],
        name,
        price,
    };



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
  app.delete ("/products/:id", (req, res)=>{
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
