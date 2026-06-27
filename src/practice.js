 import http from "http";
 import express from "express";

 const app = express();

 const server = http.createServer(app);
  app.use(express.json())
 const students = [];
 const teachers = [];
 const subjects = [];

//  app.get("/",(req,res)=>{
//     res.send("<h1> SCHOOL--HOME PAGE")
//  })

 //!CRUD STUDENTS 
 //* get all students

 app.get ("/students", (req, res)=>{
       // res.send("<h1> all users </h1>")
       const query = req.query;
       console.log(query);
        res.json({
        message: "all students",
        success: true,
        data: students,
       })
    })

 //* get all students by id
 app.get("/students/:id",(req, res)=>{
    // app.send("<h1> students </h1>")
    // const id = req.params.id
    const {id} = req.params;
    const student = students.find((student)=> student.id === Number(id))
    if(!student){
        res.json({
            message: " Students not found",
            success: false,
            data: "null"
        });
        return

    }

    res.json ({
        message: `student by ${id} fetched`,
        success : true,
        data: [{
            id: id,
            name: "Ally",
            email: "Ally@gmail.com"

        }]


    })
 })

 //* create students
 app.post("/students",(req, res)=>{

    const {name,email,password} = req.body;

    students.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        id: students.length +1,
    });
    
    res.json ({
        message: "students created",
        success: true,
        data: students[ students.length-1],
            
        
    })

 })
 //* update students by id

 app.put("/students/:id", (req, res)=>{
     
    // const id = req.params.id;
    const {id} = req.params;
    const { name, email, password} = req.body;
    const index = students.find((student=> student.id === Number(id)));

    if(index===-1){
        res.json({
            message: "student not found",
            success:false,
            data: null,
        });
        return 
        
        students[index]={
            ...students[index],
            name,
            email,
            password

        };
    }
    res.json({
        message: `student by id ${id} updated `,
        succes : true,
        data: students[index]
    })

 })

 //* delete students by id
 app.delete("/students/:id", (req, res)=>{
    // const id = req.params.id

    const {id} = req.params;
    const index = students.find((student)=> student.id === Number(id));

    if(index === -1){
        res.json ({
            message: "students not found",
            success: false,
            data:null,
        });
        return 

       students.splice(index, 1);
        res.json({
            message: "students deleted",
            success: true,
            data: null,
        })

       
    }


    // res.json({
    //     message: `students by id ${id} deleted`,
    //     success: "true",
        
    //     data:[{
    //         id:id,
    //         name:"Kunal",
    //     email: "k@gmail.com",

    //     }]
    // })
 })

 //* get all teachers 

 app.get("/teachers",(req,res)=>{
    const query = req.query;
    console.log(query);
     res.json ({
        message: "all teachers",
        success: true,
        data: teachers,
       })
    })



 //* get teachers by id 

 app.get("/teachers/:id",(req,res)=>{
    // const id = req.params.id
     const {id} = req.params;
    const teacher = teachers.find((teacher)=> teacher.id=== Number(id))

    if(!teacher){
        res.json({
            message: "teacher not found",
            success:false,
            data: null,
        });
        return 


    }


    res.json({
        message: `teachers by id ${id} fetched`,
        success: true,
        data:[{
            id:id,
            name:"Avishek",
            email:"Avi@gmail.com"

        }]
    })
 })

 //* create teachers id
 app.post("/teachers", ()=>{
    

 const {name, email, password} = req.body;
    teachers.push({
        name,
        email,
        password,
        createdAt: Date.now(),
        _id:teachers.length +1 ,
    });

        res.json({
        message: "teacher updated",
        success: true,
        data: teachers[teachers.length -1],
 });

 })

   

 //* update teachers by id 
 app.put("/teachers/:id", (req, res)=>{
    // const id = req.params.id
    const {id} = req.params;
const {name, email, password} = req.body;
const index = teachers.findIndex((teacher)=> teacher.id === Number(id));

if(index=== -1){
    res.json({
        message: "teacher not found",
        success: false,
        data: null,
    });
    return ;

    teachers[index]={
        ...teachers[index],
        name,
        email,
        password,
    };   

    res.json({
        message:`teacher updated`,
        success: true,
        data: teachers[index]
    })
 }
})

 //* delete teachers by id 

 app.delete("/teachers/:id", (req,res)=>{
    const {id} = req.params;
const index = teachers.find((teacher)=> teacher.id === Number(id));

if(index === -1){
    res.json({
        message: "teacher not found",
        scucess: false,
        data: null,
    });
    return;
}
    users.splice(index,1);
    res.json({
        message: "teacher deleted",
        success: true,
        data: null,
    });
})


//*get all subject
 app.get ("/subjects", (req, res)=>{
     const query = req.query;
       console.log(query);
        res.json ({
        message: "all subjects",
        success: true,
        data: subjects,
       })
    
 });

 //* get subject by id 

 app.get("/subjects/:id",(req,res)=>{
   const {id} = req.params;
    const subject = subjects.find((subject)=> subject.id=== Number(id))

    if(!subject){
        res.json({
            message:"subject not found",
            success: false,
            data: null
        });
        return

    }


// const id = req.params.id;

    res.json ({
        message: `subject is fetched`,
        success: true,
        data:[{
            _id:id,
            name: "john Doe",
            email: "j@gmail.com"

        }]
    })

    })
 //* create subject

 app.post("/subjects",(req, res)=>{
      const {name} = req.body;
    subjects.push({
        name,
        createdAt: Date.now(),
        _id:subjects.length +1 ,
    });

        res.json({
        message: "subject updated",
        success: true,
        data: subjects[subjects.length -1],
 });

 })


 //* update subject

 app.put("/subjects/:id", (req, res)=>{
     const {id} = req.params;
const {name} = req.body;
const index = subjects.findIndex((subject)=> subject.id === Number(id));

if(index=== -1){
    res.json({
        message: "subject not found",
        success: false,
        data: null,
    });
    return ;

    subjects[index]={
        ...subjects[index],
        name,
       
    };
}

    res.json({
        message: "subject updated",
        success: true,
        data: subjects[index],
            
        
 });
    // res.send ("<h1> users created </h1>")
})

 //* delete subject
 app.delete("/subjects/:id", (req, res)=>{
   const {id} = req.params;
const index = subjects.find((subject)=> subject.id === Number(id));

if(index === -1){
    res.json({
        message: "subject not found",
        scucess: false,
        data: null,
    });
    return;
}
    subjects.splice(index,1);
    res.json({
        message: "subject deleted",
        success: true,
        data: null,
    });
})

 server.listen(8080, "localhost", ()=>{ 
   
    console.log(`server is running at http://localhost:8080`)
    console.log("press ctrl+c to close the server");
 })