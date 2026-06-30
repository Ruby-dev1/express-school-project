
 import express from "express"
 const router = express.Router();
import { getall, getbyId, create, update, remove} from "../controllers/product.controller.js"

const mid = (req,res,next)=>{
    console.log("get all products mid");
    next()
};

//* get all products

 router.get ("/", mid , mid ,getall)

 //* get by id 

 router.get( "/:id", getbyId)


 //*create

  router.post ("/",create)


//* update
 
  router.put ("/:id", update)
        
 //* delete
  router.delete ("/:id", remove)



 export default router;