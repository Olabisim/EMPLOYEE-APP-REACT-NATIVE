const   express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require("mongoose"),

        app = express(),
        port = 3000;

require('./EmployeeModel')


const routes = require('./routes');

app.use(bodyParser.json())


const Employee = mongoose.model("EmployeeModel")

/*
        username holabisii
        password Olabisiminasu090
*/         

const mongoUri = "mongodb+srv://holabisii:Olabisiminasu090@cluster0.rfydv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
        console.log("connected to mongo yeahh")
})

mongoose.connection.on("error", (err) => {
        console.log("error", err)
})

app.use("/", routes)




app.listen(port, () => {
        console.log("app is listening on http://localhost:" + port)
})

