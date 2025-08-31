import express from "express"
import connectionDB from "./connection.js"
import userRoute from "./userRoute.js"

const app = express();
app.use(express.json());
const PORT = 5000;
connectionDB();

app.post("/api",userRoute);



app.listen(PORT, ()=>{
    console.log( `Server is running at the port number ${PORT}`);
})
