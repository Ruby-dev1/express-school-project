 import http from "http";
 import express from "express";

 const app = express();

 const server = http.createServer(app);

 app.get("/",(req,res)=>{
    res.send("<h1> SCHOOL--HOME PAGE")
 })

 //!CRUD STUDENTS 
 //* get all students by id
 app.get("/students/:id",(req, res)=>{
    // app.send("<h1> students </h1>")
    const id = req.params.id

    res.json ({
        message: `student by ${id} fetched`,
        success : "true",
        data: [{
            id: id,
            name: "Ally",
            email: "Ally@gmail.com"

        }]


    })
 })

 //* create students
 app.post("/students",(req, res)=>{
    
    res.json ({
        message: "students created",
        success: "true",
        data:{
            id: 1,
            name: "ALice",
            email: "ALice@gmail.com"

        }
    })

 })
 //* update students by id

 app.put("/studnets/:id", (req, res)=>{
     
    const id = req.params.id;

    res.json({
        message: `student by id ${id} updated `,
        succes : "true",
        data:[{
            id: id,
            name: "Diya",
            email:"diya@gmail.com"
            
        }]
    })

 })

 //* delete students by id
 app.delete("/students/:id", (req, res)=>{
    const id = req.params.id

    res.json({
        message: `students by id ${id} deleted`,
        success: "true",
        
        data:[{
            id:id,
            name:"Kunal",
        email: "k@gmail.com",

        }]
    })
 })

 //* get teachers by id 

 app.get("/teachers/:id",(req,res)=>{
    const id = req.params.id

    res.json({
        message: `teachers by id ${id} fetched`,
        success: "true",
        data:[{
            id:id,
            name:"Avishek",
            email:"Avi@gmail.com"

        }]
    })
 })

 //* create teachers id
 app.post("/teachers", ()=>{
    res.json({
        message: "teachers created",
        succes:"true",
        data:{
            id:1,
            name: "Syra",
            email:"syra@gmail.com"
        }
    })
 })

 //* update teachers by id 
 app.put("/teachers/:id", (req, res)=>{
    const id = req.params.id

    res.json({
        message:`teachers by id ${id} updated`,
        success: "true",
        data:[{
            id:id,
            name:"shayana",
            email:"shayu@gmail.com"
        }]
    })
 })

 //* delete teachers by id 

 app.delete("/teachers/:id", (req,res)=>{
    const id = req.params.id

    res.json({
        message: `teachers by id ${id} deleted`,
        success: "true",
        data:[{
            id:id,
            name:"shanaya",
            email:"shayu@gmail.com"
        }]
    })
 })

 //* get subject by id 

 app.get("/subjects/:id",(req,res)=>{
    const id = req.params.id

    res.json({
        message:`subjects by id ${id} fetched`,
        success:"true",
        data:[{
            id:id,
            name: "Computer",


        }]
    })
 })

 //* create subject

 app.post("/subjects",(req, res)=>{
    res.json({
        message: " subject created",
        success: "true",
        data:{
            id:id,
            name: "English"
        }
    })
 })

 //* update subject

 app.put("/subjects/:id", (req, res)=>{
    const id = req.params.id

    res.json({
        message: `subject by id ${id} updated`,
        success: "true",
        data:[{
            id:id,
            name:"science"
        }]
    })
 })

 //* delete subject
 app.delete("/subjects/:id", (req, res)=>{
    res.json({
        message: ` subject by id ${id} deleted`,
        success: "true",
        data:[{
            id:id,
            name: "math",
        }]
    })
 })

 server.listen(8080, "localhost", ()=>{ 
   
    console.log(`server is running at http://localhost:8080`)
    console.log("press ctrl+c to close the server");
 })