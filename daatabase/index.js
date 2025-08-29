import { express } from "module/express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());


mongoose.connect("",{
    useNewUrlParser: true,
    useUndefineTopology:true, 
})

