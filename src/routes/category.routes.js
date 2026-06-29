import express from "express"
 const router = express.Router();
import { getall, getbyId, create, update, remove} from "../controllers/category.controller.js"

//* get all products

 router.get ("/", getall)

 //* get by id 

 router.get( "/:id", getbyId)


 //*create

  router.post ("/category",create)


//* update
 
  router.put ("/:id", update)
        
 //* delete
  router.delete ("/:id", remove)



 export default router;