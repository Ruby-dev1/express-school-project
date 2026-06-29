const users = []

//* get all users

export const getall = (req,res)=>{
    const query = req.query
    console.log(query);
    res.status(200).json({
        message: "all users",
        success: true,
        data: users
    })
}

//* get user by id
 export const getbyId = (req,res)=>{
    const {id} = req.params
    const user = users.findIndex((user)=>user.id===Number(id))
    if(!user){
        res.status(400).json({
            message: "user not found",
            success: false,
            data: null
        });
        return 
    }
    res.status(200).json({
        message:`user by id ${id} is fetched`,
        success: true,
        data: user
    })

 }

 //* create user

 export const create = (req, res)=>{
    const {name, email,password}= req.body
    
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