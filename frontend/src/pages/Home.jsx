import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"

function Home() {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {

            try {
                const response =  await fetch("http://localhost:5000/api/workouts")
                const json = await response.json()
    
                if(response.ok){
                    setWorkouts(json)
                }
                
            } catch (error) {
                console.log(error)
            }
        }

        fetchWorkouts()
    }, [])


    return (
        <div className="home">
            <div className="workouts">
                { workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    )
}

export default Home