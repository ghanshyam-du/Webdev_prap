import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hi i am here!, Nice to meet u.");
})
app.get("/contact",(req,res)=>{
    res.send("Hi this is the contact page and my contace number is : 90995583265")
})
app.get("/home",(req,res)=>{
    res.send("Hi this is home page and wellcome")
})

app.listen(port, ()=>{
    console.log(`Server is running on the port no ${port}`)
})