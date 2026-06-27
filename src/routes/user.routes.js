//! CRUD users

import express from "express"

const router = express.Router();
const users = []
 //* get all users

 router.get ("/", (req, res)=>{
       // res.send("<h1> all users </h1>")
       const query = req.query;
       console.log(query);
        res.status(200).json ({
        message: "all users",
        success: true,
        data: users,
       })
    })

   //* get users by id 
   //users/100 => {id:100}
   //users/123 => {id:123}
   //users/1 => {id:1}
       //posts/:userId/:postId => /post/1/2 => {postId:2, userId:1}
   router.get ("/:id", (req, res)=>{
    //req.params => {} => {id:1}
    //console.log(req.params)
    const {id} = req.params;
    const user = users.find((user)=> user._id=== Number(id))

    if(!user){
        res.status(404).json({
            message:"users not found",
            success: false,
            data: null
        });
        return

    }


// const id = req.params.id;

    res.status(200).json ({
        message: `user by id ${id} fetched`,
        success: true,
        data:[{
            _id:id,
            name: "john Doe",
            email: "j@gmail.com"

        }]
    })

    })
    // res.send("<h1> all users </h1>")


 //*create 
 router.post( "/",(req, res)=>{


    // console.log(req.body);
    const {name, email, password} = req.body;
    users.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        _id:users.length +1 ,
    });

        res.status(201).json({
        message: "user updated",
        success: true,
        data: users[users.length -1],
 });

 })
    // res.send("<h1> Users created </h1>")
  

 //*update
 router.put ("/:id", (req, res)=>{

// const id = req.params.id;
const {id} = req.params;
const {name, email, password} = req.body;
const index = users.findIndex((user)=> user._id === Number(id));

if(index=== -1){
    res.status(404).json({
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

    res.status(200).json({
        message: "user updated",
        success: true,
        data: users[index],
            
        
 });
    // res.send ("<h1> users created </h1>")
})

 //* Delete
 router.delete( "/:id", (req, res)=>{

// const id = req.params.id;
const {id} = req.params;
const index = users.find((user)=> user._id === Number(id));

if(index === -1){
    res.status(404).json({
        message: "user not found",
        scucess: false,
        data: null,
    });
    return;
}
    users.splice(index,1);
    res.status(200).json({
        message: "user deleted",
        success: true,
        data: null,
    });
})

export default router;