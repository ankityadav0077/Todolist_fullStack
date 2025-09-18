const Todo=require('../models/todosModels')
const asyncHandler=require('express-async-handler')
const addTodo=asyncHandler(async(req,res)=>{
    console.log(req.user.id)
    const {title,description,completed}=req.body
    const todo=await Todo.create({
        title:title,
        description:description,
        userId:req.user.id
    })
    res.status(200).json({message:'add todo',todo})
})
const getTodos=asyncHandler(async(req,res)=>{
    const todos=await Todo.find({userId:req.user.id})
    res.status(200).json({message:'get todo',todos})
})
const updateTodo=asyncHandler(async(req,res)=>{
    console.log(req.params.id)
    const {title,description,completed}=req.body
    if (title){
        await Todo.updateOne({_id:req.params.id},{title:title})
        console.log(title)
    }
    if(description){
        await Todo.updateOne({_id:req.params.id},{description:description})
        console.log(description)
        
        
    }
    if(completed){
        await Todo.updateOne({_id:req.params.id},{completed:completed})
        console.log(completed)
    }
    const todo=await Todo.findOne({_id:req.params.id})
    res.status(200).json({message:'update todo',todo})  
})
const deleteTodo=asyncHandler(async(req,res)=>{
    console.log(req.params.id)
    await Todo.deleteOne({_id:req.params.id})
    res.status(200).json({message:'delete todo sucessfull'})
})

module.exports={addTodo,getTodos,updateTodo,deleteTodo}