import mongoose from "mongoose"
const products = []


//! product schema

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,

    },
    price:{
        type:Number,
        required : true,

    }
})

//! creating product model 

const Product = mongoose.model("product", productSchema);
//* get all products

export const getall = async(req,res,next)=>{
    try{
    const query = req.query
    console.log(query);

    //* database find all query
    const products = await Product.find({})
    console.log("get all products");

    res.status(200).json({
        message:"all products",
        success:true,
        data:products
    })
} catch(error){
    next(error);
}
};
//* get product by id
 export const getbyId = async (req,res,next)=>{
    try{
    const {id} = req.params
    // const product = products.find((product)=>product.id===Number(id))
    const product = await Product.findOne({id:id});

    if(!product){
        // res.status(400).json({
        //     message: "product not found",
        //     success: false,
        //     data: null
        next({
            message:"product not found",
            statusCode: 404

        })
     return

        }
   
   
    res.status(200).json({
        message:`product by id ${id} is fetched`,
        success: true,
        data: product
    })
}
    catch(error){
        next(error);
    }
};



 //* create product

 export const create = async(req, res,next)=>{
    try{
    const {name, price}= req.body
    
    const product = await Product.create({
        name,
        price,
       
    });

    res.status(201).json({
        message: "product is created",
        success: true,
        data: product
    })
 }
 catch(error){
    next(error);
 }
 };
 //* update product by id

 export const update = async (req, res,next)=>{
    try{
    const {id} = req.params
    const {name, price}= req.body;
    const product = await Product.findByIdAndUpdate(
        id,
        {
            name,
            price,
        },
        {
            new : true
        }
    );
    // const Index = products.findIndex((product)=>product.id===Number(id))
     if(!product){
        return next({
            message: "product not found",
            statusCode: 404
        })
    }

   
    res.status(200).json({
        message: `product by id ${id} is updated`,
        success:true,
        data: product
    })
 } catch(error){
    next(error);
 }
};

 //* delete product by id

 export const remove =  async  (req,res,next)=>{
    try{
    const {id} = req.params
   const product = await delete  Product.findByIdAndDelete(id);
    if(!product){
        return next({
            message: "product not found",
            statusCode: 404
        })
        }
        
    }
    catch(error){
        next(error);
    }

   
 };
