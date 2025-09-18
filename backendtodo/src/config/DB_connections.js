const mongoose=require('mongoose')

const connectDB=async () => {
    mongoose.connect('mongodb://localhost:27017/todoappfullS', {
    useNewUrlParser: true,
    useUnifiedTopology: true        
}).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log("error connecting to mongodb", err)
}) 
}
module.exports=connectDB