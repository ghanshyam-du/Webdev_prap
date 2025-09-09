import mongoose from "mongoose";

async function connectMongoDB() {

    return mongoose
.connect("mongodb+srv://ghanshyamd5402_db_user:saxHtNAyMqyni1zT@cluster0.on4v9nr.mongodb.net/Practice?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log("Mongo Error", err));
    
}

export default connectMongoDB;