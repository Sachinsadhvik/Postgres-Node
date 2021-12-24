const {methods}=require("./service");
const {queries}= require("../Query")

//getmethod
 const getTodo2 =(req,res)=>
   {
   methods.todoList(queries.GetDefault).then((data)=>{ res.json(data); })
   }


//post todo
const postTodo2= (req,res)=>
   {

    const {description}=req.body;
    methods.addTodo(description,queries.InsertDefault).then((data)=>res.json(data))
    
   }



//post into a particular table
const realTodo2= (req,res)=>

    {
      methods.dynamicTodo(req.body,queries.CreateTable,queries.Insert).then((data)=>res.json(data))
    }

//delete a todo 

const deleteTodo= (req,res)=>
  {
   methods.deleteTodo(req.body,queries.DeleteTodo).then((data)=>res.json(data))
  }

//update a todo
const updateTodo=(req,res)=>
   {
    methods.updateTodo(req.body,queries.UpdateTodo).then((data)=>res.json(data))
   }

module.exports.t2controllers={getTodo2,postTodo2,realTodo2,deleteTodo,updateTodo}