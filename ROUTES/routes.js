const express = require('express');
const router = express.Router();
const {controllers } = require('../API/vector/controlller');
const {t2controllers} = require('../API/table1/controller')


router.get("/t1/get",controllers.getTodo)
router.post('/t1/post',controllers.postTodo);
router.post('/t1/dynamic',controllers.realTodo);
router.post('/t1/delete',controllers.deleteTodo);
router.post('/t1/update',controllers.updateTodo)
router.get("/t2/get",t2controllers.getTodo2)
router.post('/t2/post',t2controllers.postTodo2);
router.post('/t2/dynamic',t2controllers.realTodo2);
router.post('/t2/delete',t2controllers.deleteTodo);
router.post('/t2/update',t2controllers.updateTodo)

module.exports=router;