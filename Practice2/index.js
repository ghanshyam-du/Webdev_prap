import express from "express"

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 4000;


app.listen(PORT,()=>{
    console.log(`Server is listning at ${PORT}`);
})