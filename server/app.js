const   express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require("mongoose"),

        app = express(),
        port = 3000;


/*
username holabisii
password Olabisiminasu090
*/         
const mongoUri = "mongodb+srv://holabisii:Olabisiminasu090@cluster0.rfydv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.get("/", (req, res) => {
        res.send("welcome to node js")
})


app.listen(port, () => {
        console.log("app is listening on http://localhost:" + port)
})
