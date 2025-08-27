import express from "express";
const app = express();
const port = 3000;

app.use((req, res, next)=>{
    console.log("hi this is first middleware 1");
    next();
})
app.get("/", (req, res)=>{
    res.send("Hi i am here!, Nice to meet u.");
})
app.get("/contact",(req,res)=>{
    res.send("Hi this is the contact page and my contace number is : My number ")
})
app.get("/home",(req,res)=>{
    res.send("Hi this is home page and welcome")
})

app.post("/test",(req,res)=>{
    res.sendStatus(201);
})


app.put("/user/gd",(req,res)=>{
    res.sendStatus(200);
})


app.patch("/user/gd",(req,res)=>{
    res.sendStatus(200);
})
app.delete("/user/gd",(req,res)=>{
    res.sendStatus(200);
})
app.listen(port, ()=>{
    console.log(`Server is running on the port no ${port}`)
})