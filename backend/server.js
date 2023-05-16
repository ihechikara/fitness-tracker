const express = require("express")
require("dotenv").config()

const app = express()
const mongoose = require("mongoose")

const workoutRoutes = require("./routes/workouts")

// middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/workouts", workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
        console.log("db connected")
    })
    .catch((error)=>{
        console.log(error)
    }) 