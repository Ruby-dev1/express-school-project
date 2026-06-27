//* get all products

 import express from "express"
 const router = express.Router();
 const products =[]

 router.get ("/", (req, res)=>{
     const query = req.query;
       console.log(query);
        res.status(200).json ({
        message: "all products",
        success: "true",
        data: products,
       })
    
 });


 //* get by id 
 router.get( "/:id", (req,res)=>{

    // const id = req.params.id;
    const {id} = req.params;
    const product = products.find((product)=> product._id === Number(id))

    if(!product){
        res.status(404).json({
            message:"product not found",
            success: false,
            data: null,
        });
        return;
    }

    res.status(200).json ({
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
  router.post ("/", (req, res)=>{
    // res.send ("<h1> product created </h1>")
    const {name, price} = req.body;
    products.push({
        name,
        price,
        
        createdAt: new Date (Date.now()),
        _id:products.length +1 ,
    });

  
        res.status(201).json({
        message: " product updated",
        success: "true",
        data: products[products.id -1]
 });



    
    })


//* update
 
  router.put ("/:id", (req, res)=>{
    // res.send ("<h1> product updated </h1>")
    // const id = req.params.id;
    const {id} = req.body;
    const {name, price} = req.body;
    const index = products.findIndex((product) => product._id);

    if(index === -1){
        res.status(404).json({
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



        res.status(200).json({
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
  router.delete ("/:id", (req, res)=>{
    // res.send ("<h1> product deleted </h1>")
    const id = req.params.id;

        res.status(200).json({
        message: " product deleted",
        success: "true",
        data: {
            _id:id,
            name: "mobile ",
            price : "30000"

        }
 });
 });


 export default router;