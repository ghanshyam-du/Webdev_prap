import express from "express";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000;
app.use((req, res, next)=>{
 console.log("Hello from middleware 1"); 

})


app.get("/", (req, res) => {
 
});
app.post("/submit",(req,res)=>{
  console.log(req.body);
   res.send("Band name received");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
