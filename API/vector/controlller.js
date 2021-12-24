const {methods}=require("./service")
const {queries}=require("../Query")

//getmethod
 const getTodo =async(req,res)=>
   {
       methods.todoList(queries.GetDefault()).then((data)=> res.json(data))
   }

//post todo
const postTodo= async(req,res)=>
   {

        const {description}=req.body;
        methods.addTodo(description,queries.InsertDefault()).then((data)=>res.json(data))
    
   }

//post into a particular table
const realTodo= async(req,res)=>

    {
         methods.dynamicTodo(req.body,queries.CreateTable,queries.Insert).then((data)=>res.json(data))
    }


//delete to do
const deleteTodo= (req,res)=>
    {
     methods.deleteTodo(req.body,queries.DeleteTodo).then((data)=>res.json(data))
    }
  
//update to do 

const updateTodo=(req,res)=>
   {
    methods.updateTodo(req.body,queries.UpdateTodo).then((data)=>res.json(data))
   }

module.exports.controllers= { getTodo,postTodo,realTodo,deleteTodo,updateTodo}