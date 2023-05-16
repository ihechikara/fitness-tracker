const express = require("express")

const { createWorkout, getAllWorkouts, getSingleWorkout, updateWorkout, deleteWorkout } = require("../controllers/workout")

const router = express.Router()

router.post("/", createWorkout)

router.get("/", getAllWorkouts)

router.get("/:id", getSingleWorkout)

router.patch("/:id", updateWorkout)

router.delete("/:id", deleteWorkout)


module.exports = router