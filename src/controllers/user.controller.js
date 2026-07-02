import mongoose from "mongoose"
const users = []

//!  user schema 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,

    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required:true,
    },
},{timestamps:true}
);

//! creating user model

const User = mongoose.model("user",userSchema);


//* get all users

export const getall = async(req,res)=>{
    try{
    const query = req.query
    console.log(query);
//* database find all query
    const users = await User.find({})
    res.status(200).json({
        message: "all users",
        success: true,
        data: users
    })
}
catch(error){
    next(error);
}
};

//* get user by id
 export const getbyId = async(req,res,next)=>{

    try{
    const {id} = req.params
    // const user = users.find((user)=>user.id===Number(id))
    const user = await User.findOne({id: id}); //_id:id 
    if(!user){
        // res.status(400).json({
        //     message: "user not found",
        //     success: false,
        //     data: null

        next({
            message: "user not found",
            statusCode: 404,

        });


    
        return 
    }
    res.status(200).json({
        message:`user by id ${id} is fetched`,
        success: true,
        data: user
    })
    }
    catch(error){
        next(error);
    }
 };

 //* create user

 export const create = (req, res)=>{
    const {name, email,password}= req.body
    //await.User
    
    users.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        id: users.length+1
    });

    res.status(201).json({
        message: "user is created",
        success: true,
        data: users[users.length-1]
    })
 }

 //* update user by id

 export const update = (req, res)=>{
    const {id} = req.params
    const {name, email,password}= req.body;
    const Index = users.findIndex((user)=>user.id===Number(id))

    //User.findByIdAndUpdate({id:id},{name,email,password,{new:true}})
    if(Index===-1){
        res.status(400).json({
            message: "user not found",
            success: false,
            data: null
        });
        return 
    }

    users[index]={
        ...users[index],
        name,
        email,
        password,
    }
    res.status(200).json({
        message: `user by id ${id} is updated`,
        success:true,
        data: users[index]
    })
 }

 //* delete product by id

 export const remove = (req,res)=>{
    const {id} = req.params
    const Index = users.findIndex((user)=>user.id)===Number(id)
    if(Index ===-1){
        res.status(400).json({
            message: "user not found",
            success: false,
            data: null
        });
        return 
    }

    users.splice(Index,1);
    res.status(200).json({
        message:`user by id ${id} is deleted`,
        success: true
    })
 }