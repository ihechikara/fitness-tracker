const express = require("express")
require("dotenv").config()

const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/user")

// middleware
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)

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