import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import AddForm from "../components/AddForm"

function Home() {
    const { workouts, dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response =  await fetch("http://localhost:5000/api/workouts", {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                })
                const json = await response.json()
    
                if(response.ok){
                    dispatch({type: "SET_WORKOUTS", payload: json})
                }
                
            } catch (error) {
                console.log(error)
            }
        }

        if (user) {
            fetchWorkouts()
        }
    }, [dispatch, user])


    return (
        <div className="home">
            <div className="workouts">
                { workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>

            <AddForm/>
        </div>
    )
}

export default Home