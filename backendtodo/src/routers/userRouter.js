const express=require('express')
const router=express.Router()
const {registerUser,loginUser, getUserProfile}=require('../controllers/userController')
const {authMiddleware}=require('../middleweres/authMiddleware')        
const {registerUserSchema,loginUserSchema} =require('../validation/userValidation')
const {validate} =require('../middleweres/validateMiddleware')



router.post('/register',validate(registerUserSchema),registerUser)
router.post('/login',validate(loginUserSchema),loginUser)
router.get('/profile',authMiddleware,getUserProfile)   
router.get('/a',(req,res)=>{
    console.log("ok from user router")
    res.status(200).json({mesage:'ok from user router'})
})

module.exports=router