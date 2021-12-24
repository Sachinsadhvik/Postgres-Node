
const pool=require("../db");

 const todoList=()=>{
    return new Promise(async (resolve,reject)=>
    {
       
     try
         {
            const data= await pool.query("SELECT * FROM table1")
            resolve(data.rows)
         }
    catch 
        {
            reject()
            
        }
     })
                  }

const addTodo=(data)=>{
    return new Promise(async (resolve,reject)=>
    {
       
    try{
        const newTodo= await pool.query("INSERT INTO table1 (description) VALUES ($1) RETURNING *",[data])
        resolve(newTodo.rows[0])
    }
    catch {
        reject()
    }
   })
}

const dynamicTodo=(data)=>{
    return new Promise(async (resolve,reject)=>{
try{
    const {description,table}=data;
    const create= await pool.query(`CREATE TABLE IF NOT EXISTS ${table} ( todo_id SERIAL PRIMARY KEY, description VARCHAR(255));`)
     const newTodo= await pool.query(`INSERT INTO ${table}(description) VALUES ($1) RETURNING *`,[description]);
resolve(newTodo.rows[0])

}
catch {
    
reject();
}
 



    })
}



module.exports.dynamicTodo=dynamicTodo;
module.exports.addTodo=addTodo;
module.exports.todoList=todoList;