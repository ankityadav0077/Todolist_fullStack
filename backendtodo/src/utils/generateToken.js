const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
const { model } = require('mongoose')
dotenv.config()
const generateToken=(userId)=>{
    // console.log({userId})
    const token=jwt.sign({id:userId},process.env.JWT_SECRET)
    return token
}

module.exports=generateToken