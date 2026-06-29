

import express from "express"

const router = express.Router();
import { getall, getbyId, create, update, remove} from "../controllers/user.controller.js"


//! CRUD users

 //* get all users

 router.get ("/", getall)
   //* get users by id 
   //users/100 => {id:100}
   //users/123 => {id:123}
   //users/1 => {id:1}
       //posts/:userId/:postId => /post/1/2 => {postId:2, userId:1}
   router.get ("/:id",getbyId)
// const id = req.params.id;

   
 //*create 
 router.post( "/",create)
    // res.send("<h1> Users created </h1>")
  

 //*update
 router.put ("/:id",update)
    // res.send ("<h1> users created </h1>")


 //* Delete
 router.delete( "/:id", remove)

export default router;