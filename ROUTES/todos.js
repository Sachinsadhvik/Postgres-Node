const express = require('express');
const router = express.Router();
const { x}= require("../API/vector/controlller")
const { todoList,addTodo, dynamicTodo}= require("../CONTROLLERS/todos");
router.use(express.json())
// const x =async(req,res)=>{
      
//     todoList().then((data)=>{
//         res.json(data);
//     }).catch(err=>{
//          res.send("error occured")
//     })  
// }
router.get('/get', x)

router.post("/todos", async(req,res)=>{
    const {description}=req.body;
    addTodo(description).then((data)=>res.json(data)).
 
    catch(err=>
        console.log(err.message)
    )})
router.post("/create",async(req,res)=>{
   dynamicTodo(req.body).then((data)=>res.json(data)).catch(()=>
    console.log("error occured"))
})

module.exports= router;