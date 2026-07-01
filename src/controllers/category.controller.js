const categories = []

//* get all categories


export const getall = (req,res)=>{
    const query = req.query
    console.log(query);
    res.status(200).json({
        message:"all categories",
        success:true,
        data:categories
    })
}

//* get category by id

 export const getbyId = (req,res,next)=>{
    const {id} = req.params
    const category = categories.find((category)=>category.id===Number(id))
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

 //* create category

 export const create = (req, res)=>{
    const {name,Brand}= req.body
    
    categories.push({
        name,
        Brand,
        createdAt: Date.now(),
        id: categories.length+1
    });

    res.status(201).json({
        message: "category is created",
        success: true,
        data: categories[categories.length-1]
    })
 }

 //* update category by id

 export const update = (req, res)=>{
    const {id} = req.params
    const {name, Brand}= req.body;
    const Index = categories.findIndex((category)=>category.id===Number(id))
    if(Index===-1){
        res.status(400).json({
            message: "category not found",
            success: false,
            data: null
        });
        return 
    }

    categories[index]={
        ...categories[index],
        name,
        Brand,
    }
    res.status(200).json({
        message: `category by id ${id} is updated`,
        success:true,
        data: categories[index]
    })
 }

 //* delete category by id

 export const remove = (req,res)=>{
    const {id} = req.params
    const Index = categories.findIndex((category)=>category.id)===Number(id)
    if(Index ===-1){
        res.status(400).json({
            message: "category not found",
            success: false,
            data: null
        });
        return 
    }

    categories.splice(Index,1);
    res.status(200).json({
        message:`category by id ${id} is deleted`,
        success: true
    })
 }