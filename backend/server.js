const express = require("express")
require("dotenv").config()

const app = express()

const workoutRoutes = require("./routes/workouts")

// middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/workouts", workoutRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})