//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan"; 
import express from "express"; 

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express(); 
const port = 3000;  
const correctPw = "ILoveProgramming";
let password = ""; 


app.use(express.urlencoded({ extended : true}));
app.use(morgan("tiny")); 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    password = req.body["password"]
    console.log(password);
    password === correctPw ? res.redirect("/secrets")
    : res.sendFile(__dirname + "/public/index.html");
});

app.get("/secrets", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
    res.status(200);
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
