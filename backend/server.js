const express = require("express")
require("dotenv").config()

// express app
const app = express()

// middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get("/", (req, res)=>{
    res.send("Welcome to the / route")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})