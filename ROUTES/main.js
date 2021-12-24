const express = require('express');
const router = express.Router();

const todos= require("./todos")
router.use("/todo", todos)
module.exports=router;