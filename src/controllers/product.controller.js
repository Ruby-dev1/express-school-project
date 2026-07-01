const products = []

//* get all products

export const getall = (req,res)=>{
    const query = req.query
    console.log(query);
    console.log("get all products");
    console.log(req.user)
    res.status(200).json({
        message:"all products",
        success:true,
        data:products
    })
}

//* get product by id
 export const getbyId = (req,res,next)=>{
    const {id} = req.params
    const product = products.find((product)=>product.id===Number(id))
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

        };
   
   
    res.status(200).json({
        message:`product by id ${id} is fetched`,
        success: true,
        data: product
    })
}



 //* create product

 export const create = (req, res)=>{
    const {name, price}= req.body
    
    products.push({
        name,
        price,
        createdAt: Date.now(),
        id: products.length+1
    });

    res.status(201).json({
        message: "product is created",
        success: true,
        data: products[products.length-1]
    })
 }

 //* update product by id

 export const update = (req, res)=>{
    const {id} = req.params
    const {name, price}= req.body;
    const Index = products.findIndex((product)=>product.id===Number(id))
    if(Index===-1){
        res.status(400).json({
            message: "product not found",
            success: false,
            data: null
        });
        return 
    }

    products[index]={
        ...products[index],
        name,
        price
    }
    res.status(200).json({
        message: `product by id ${id} is updated`,
        success:true,
        data: products[index]
    })
 }

 //* delete product by id

 export const remove = (req,res)=>{
    const {id} = req.params
    const Index = products.findIndex((product)=>product.id)===Number(id)
    if(Index ===-1){
        res.status(400).json({
            message: "product not found",
            success: false,
            data: null
        });
        return 
    }

    products.splice(Index,1);
    res.status(200).json({
        message:`product by id ${id} is deleted`,
        success: true
    })
 }