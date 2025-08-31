import mongoose from "mongoose";


const connectionDB = async ()=>{
    mongoose.connect("mongodb+srv://ghanshyamd5402_db_user:saxHtNAyMqyni1zT@cluster0.on4v9nr.mongodb.net/Practice?retryWrites=true&w=majority&appName=Cluster0",{
        userNewUrlParser:true,
        userUnifiedTopology: true,
    })
    .then(()=>console.log("MongoDB is connected successfuly"))
    .catch((err)=>console.log("Mongo error",err));
}

export default connectionDB;