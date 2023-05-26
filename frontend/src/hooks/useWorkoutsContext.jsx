import { WorkoutContext } from "../context/WorkoutContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)

    if(!context) {
        throw Error(" An error occured! Check context logic")
    }
    
    return context
}