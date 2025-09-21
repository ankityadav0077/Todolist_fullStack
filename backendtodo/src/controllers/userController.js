const User=require('../models/userModels')
const asyncHandler=require('express-async-handler')
const generateToken=require('../utils/generateToken')   
// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    console.log("ok from regiester",email,name,password)
    const userExists=await User.findOne({email:email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }           
    const user=await User.create({
        name,
        email,  
        password
    })          
    if(user){       
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,       
            token:generateToken(user._id)
        })          
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }   
})

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const userExists=await User.findOne({email})
    if (userExists){
        if (password==userExists.password){
            const token=generateToken(userExists._id,userExists.name)
            res.status(200).send({message:'ok login successsfull',token,name:userExists.name})
        }
        else{

            res.status(400).send({message:'invalid username or password'})
        }
    }
    else{
        res.status(400).send({message:'invalid username or password'})
    }
})

const getUserProfile=asyncHandler(async(req,res)=>{
    // console.log(req.user.id)
    const userDetails=await User.findOne({_id:req.user.id})
    res.status(200).send({message:'function has to written yet dume massage basicaly to testing token authetication',userDetails})
})

module.exports={registerUser,loginUser,getUserProfile}