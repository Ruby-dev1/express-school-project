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

export const getall = async(req,res,next)=>{
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

export const create = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: "User created successfully",
            success: true,
            data: user
        });

    } catch (error) {
        next(error);
    }
};
 //* update user by id

 export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            {
                name,
                email,
                password
            },
            {
                new: true
            }
        );

        if (!user) {
            return next({
                message: "User not found",
                statusCode: 404
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            success: true,
            data: user
        });

    } catch (error) {
        next(error);
    }
};
 //* delete product by id

 export const remove =async  (req,res,next)=>{
    try{
    const {id} = req.params
    const user = await delete User.findByIdAndDelete(id);
    if(!user){
        return next({
            message: "user not found",
            statusCode: 404,

        });
    }
    res.status(200).json({
        message: "user deleted successfully",
        success: true,
        data: user,

    }); 
 } catch (error){
    next(error);
 }
};