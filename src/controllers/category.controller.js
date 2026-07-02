import mongoose from "mongoose"

const categories = []


//! category schema

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minLength : 3
    },
    Brand: {
        type: String,
        required : true,



    }

})

//! creating category model

const Category = mongoose.model("category", categorySchema);

//* get all categories


export const getall = async(req,res, next)=>{
    try{
    const query = req.query
    console.log(query);
//* database find all query
const categories = await  Category.find({})

    res.status(200).json({
        message:"all categories",
        success:true,
        data:categories
    })
}
catch(error){
    next(error);
}
};

//* get category by id

 export const getbyId = async(req,res,next)=>{
    try{
    const {id} = req.params
    const category = await Category.findOne({id:id});
    if(!category){
        // 
        next({
            message:"category not found",
            statusCode: 404
        })
        return 
    }
    res.status(200).json({
        message:`category by id ${id} is fetched`,
        success: true,
        data: category
    })

 }
 catch(error){
    next(error);
 }
};

 //* create category

 export const create = async (req, res,next)=>{
    try{
    const {name,Brand}= req.body
    
   const category = await Category.create({
        name,
        Brand,
       
    });

    res.status(201).json({
        message: "category is created",
        success: true,
        data: category
    });
 }
 catch(error){
    next(error);
 }
};

 //* update category by id

 export const update = async(req, res,next)=>{
    try{
    const {id} = req.params
    const {name, Brand}= req.body;
   const category = await Category.findByIdAndUpdate(
    id,{
        name,
        Brand,
    
    },
    {
        new: true
    }

   );
    if(!category){
         return next({
            message: "category not found",
            statusCode: 404
        });
      
    }

 
    res.status(200).json({
        message: `category by id ${id} is updated`,
        success:true,
        data: category
    })
 }
 catch(error){
    next(error);
 }
};

 //* delete category by id

 export const remove = async(req,res,next)=>{
    try{
    const {id} = req.params
   const category = await delete Category.findByIdAndDelete(id)
    if(!category){
        return next({
            message: "category not found",
            statusCode: 404,
        });
    }     
  
    res.status(200).json({
        message: "category deleted successfully",
        success: true,
        data: category,
    })
 }
 catch(error){
    next(error);
 }
};