const express=require('express')
const router=express.Router()
const {addTodo,getTodos,updateTodo,deleteTodo}=require('../controllers/todoController')
const {authMiddleware}=require('../middleweres/authMiddleware')        
router.post('/',authMiddleware,addTodo)
router.get('/',authMiddleware,getTodos)
router.put('/:id',authMiddleware,updateTodo)
router.delete('/:id',authMiddleware,deleteTodo)    
module.exports=router