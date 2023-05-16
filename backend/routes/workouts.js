const express = require("express")

const router = express.Router()

router.get("/", (req, res)=>{
    res.json({msg: "Gets all workouts"})
})

router.get("/:id", (req, res)=>{
    res.json({msg: "Gets a single workout"})
})

router.post("/", (req, res)=>{
    res.json({msg: "Creates a new workout"})
})

router.delete("/:id", (req, res)=>{
    res.json({msg: "Deletes a workout"})
})

router.patch("/:id", (req, res)=>{
    res.json({msg: "Updates a workout"})
})

module.exports = router