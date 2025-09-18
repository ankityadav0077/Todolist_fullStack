const jwt=require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET= process.env.JWT_SECRET ;

const authMiddleware=(req,res,next)=>{
    const authHeadre=req.headers["authorization"]
    const token=authHeadre && authHeadre.split(" ")[1]
    if (!token)return res.status(401).json({message:'token is invalide'})
    try{
        const decode=jwt.verify(token,JWT_SECRET)
        req.user=decode
        next()
    } catch(error){
        res.status(401).json({message:'unauthorized access /from authmiddileware'})
    }
}

module.exports={authMiddleware}