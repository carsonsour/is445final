const express = require("express");
const app = express();
require('dotenv').config

//Set up EJS 
app.set("view engine", "ejs");

//Start Listener 
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started (http://localhost:3000/) !");
}); 

//Set up routes 
app.get("/", (req, res) => {
    res.send("Hello world...");
})
