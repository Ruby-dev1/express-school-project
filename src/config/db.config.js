// connect database function 

import mongoose from "mongoose";
export const connectDatabase = () =>{

    mongoose
    .connect("mongodb://localhost:27017/team_14_3_30")
    .then(()=>{
        console.log("database connected");
    }).catch(error=>{
        console.log("------database connection error------");
        console.log(error);
    });

};