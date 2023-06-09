const Workout = require("../models/workout")
const mongoose = require("mongoose")

// create workouts
const createWorkout = async (req, res)=>{
    const { title, load, reps } = req.body

    let emptyFormFields = []

    if(!title){
        emptyFormFields.push("title")
    }
    if(!load){
        emptyFormFields.push("load")
    }
    if(!reps){
        emptyFormFields.push("reps")
    }

    if(emptyFormFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFormFields})
    }

    try {
        const user_id = req.user._id

        const workout = await Workout.create({ title, load, reps, user_id })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get all workouts
const getAllWorkouts = async (req, res) => {

    const user_id = req.user._id

    try {
        const workouts = await Workout.find({user_id}).sort({createdAt: -1 })
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get single workout
const getSingleWorkout = async (req, res) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: `No workout with ID of ${id}`})
        }

        const workout = await Workout.findById(id)

        if(!workout) {
            return res.status(400).json({error: "Workout does not exist"})
        }

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// update workout
const updateWorkout = async (req, res) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: `No workout with ID of ${id}`})
        }

        const workout = await Workout.findByIdAndUpdate({_id: id}, {...req.body}, {new:true, runValidators:true})

        if(!workout) {
            return res.status(400).json({error: "Workout does not exist"})
        }

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete workout
const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: `No workout with ID of ${id}`})
        }

        const workout = await Workout.findByIdAndDelete({_id: id})

        if(!workout) {
            return res.status(400).json({error: "Workout does not exist"})
        }

        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout
}