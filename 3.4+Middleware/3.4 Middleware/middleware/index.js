//Middleware functions are functions that have access to the request object(req), the response object(res), and the next middleware function in the application's request-response cycle.
// middleware functions can perform the following tasks:
// -execute any code, make changes to the request and the response objects, end the request-response cycle, call the next middleware function in the stack
// The next middleware fuction is commonly denoted by a variable named next;

// types of middleware 
// - Applicaton level middleware
//- Route level middleware
//- Error handling middleware
//- Buildin middleware
//- Custom middleware
//- Third party middleware

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    //  return res.json({msg: "hello from middleware 1"}); 
    // return res.end("kya re ");

    fs.appendFile("log.txt", `${Date.now()}: ${req.method} : ${req.path}`, (err, data) => {
        next();
    })


})


app.use((req, res, next) => {
    console.log("hello from middleware 2");

})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Band name received");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
