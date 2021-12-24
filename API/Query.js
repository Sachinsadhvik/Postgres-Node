
const GetDefault=()=>"SELECT * FROM table1";
const Get =(name)=> `SELECT * FROM ${name}`;

const InsertDefault=()=>"INSERT INTO table1 (description) VALUES ($1) RETURNING *";
const Insert=(name)=>`INSERT INTO ${name} (description) VALUES ($1) RETURNING *`;

const CreateTable=(table)=>`CREATE TABLE IF NOT EXISTS ${table} ( todo_id SERIAL PRIMARY KEY, description VARCHAR(255));`
const DeleteTodo=(table,todoid)=>`DELETE FROM ${table}
WHERE todo_id=${todoid}`

const UpdateTodo=(table,description,todoid)=>`UPDATE ${table}
SET DESCRIPTION = '${description}'
WHERE TODO_ID=${todoid}`

module.exports.queries={Get,GetDefault,InsertDefault,Insert,CreateTable,DeleteTodo,UpdateTodo}    