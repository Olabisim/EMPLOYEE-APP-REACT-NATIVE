const express = require('express')

const router = express.Router()


const mongoose = require("mongoose")

require('./EmployeeModel')

const Employee = mongoose.model("EmployeeModel")

router.get("/", (req, res) => {
        Employee.find({})
        .then (data => {
                res.send(data)
        })
        .catch(err => {
                console.log(err)
        })
})

// router.post("/send-data", (req, res) => {

//         console.log(req.body)
//         res.send("posted")

// })
router.post("/send-data", (req, res) => {

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


router.post("/update", (req, res) => {

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


router.post("/delete", ( req, res) => {

        Employee.findByIdAndRemove(req.body.id)
        .then( data => {
                console.log(data)
                res.send(data)
        })
        .catch(err => console.log(err))

})


module.exports = router