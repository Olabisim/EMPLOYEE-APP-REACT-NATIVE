const   express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require("mongoose"),

        app = express(),
        port = 3000;

require('./EmployeeModel')


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


app.get("/", (req, res) => {
        Employee.find({})
        .then (data => {
                res.send(data)
        })
        .catch(err => {
                console.log(err)
        })
})

// app.post("/send-data", (req, res) => {

//         console.log(req.body)
//         res.send("posted")

// })
app.post("/send-data", (req, res) => {

        const employee = new Employee({

                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                picture: req.body.picture,
                salary: req.body.salary,
                position: req.body.position

        })

        employee.save()
        .then(data => {
                console.log(data)
                res.send(data)
        })
        .catch(err => console.log(err))

})


app.post("/update", (req, res) => {

        Employee.findByIdAndUpdate(req.body.id, {

                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                picture: req.body.picture,
                salary: req.body.salary,
                position: req.body.position

        })
        .then ( data => {
                
                console.log(data)
                res.send(data)
                
        })
        .catch( err => console.log(err))

})


app.post("/delete", ( req, res) => {

        Employee.findByIdAndRemove(req.body.id)
        .then( data => {
                console.log(data)
                res.send(data)
        })
        .catch(err => console.log(err))

})

app.listen(port, () => {
        console.log("app is listening on http://localhost:" + port)
})

