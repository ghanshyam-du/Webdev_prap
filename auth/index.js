import express from "express";
import userRouter from "./routes/user.js";
import connectMongoDB from "./connection.js";

const app = express();

const PORT = 5000;

connectMongoDB();
app.use(express.urlencoded({extended: true}))

app.use("/user",userRouter);

app.listen(PORT, ()=>{
     console.log(`Server is running at the PORT: ${PORT}`);
})

