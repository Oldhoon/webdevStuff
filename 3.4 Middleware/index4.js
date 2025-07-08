import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandname = ""; 
app.use(morgan("tiny"));
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    res.status(200);
});

function bandNameGen(req, res, next) {
    console.log(req.body); 
    bandname = req.body["street"] + " " + req.body["pet"]; 
    next();
}

app.use(bandNameGen);

app.post("/submit", (req, res) => {
    res.send("<h1>Your band name is: </h1> <p>" + bandname + "</p>");
    res.status(200);
});

