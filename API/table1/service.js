const pool= require('../../db');

//fetching items
const todoList=(query)=>
    {
    return new Promise( (resolve,reject)=>
        {
             pool.query(query(),(error,results)=>{
                 if(error){
                     resolve(error)
                 }
                 else{
                     resolve(results.rows)
                 }
             })
        
        })
   }


   //adding new item
const addTodo=(data,query)=>
    {
    return new Promise( (resolve,reject)=>
        {
       
    
                pool.query(query(),[data],(error,results)=>{
                    if(error){
                        resolve(error)
                    }
                    else {
                        resolve(results.rows[0])
                    }
                })
                
        
        })
    }
    
//adding new item into a particular table
const dynamicTodo=(data,CreateTable,Insert)=>
    {
    return new Promise(async (resolve,reject)=>
        {
            const {description,table}=data;
            const create= await pool.query(CreateTable(table))
            pool.query(Insert(table),[description],(error,results)=>{
                if(error){
                        resolve(error)
                }
                else{
                      resolve(results.rows[0])
                }
            });
        })
    }


const deleteTodo=(data,Delete)=>
   {
   return new Promise( (resolve,reject)=> 
       {
        const {table,todoid}=data;
        console.log(table,todoid)
        pool.query(Delete(table,todoid),(error,results)=>
          {
            if(error){
                 resolve(error)
                      }
            else {
                resolve(results)
                 }

          })
      })
   }



   const updateTodo=(data,update)=>{
    return new Promise( (resolve)=> 
    {
     const {table,description,todoid}=data;
     console.log(table,description,todoid)
     pool.query(update(table,description,todoid),(error,results)=>
       {
         if(error){
             console.log(error.message)
              resolve(error)
                   }
         else {
             resolve(results)
              }
       })
    })
  }

    module.exports.methods={addTodo,dynamicTodo,todoList,deleteTodo,updateTodo}
