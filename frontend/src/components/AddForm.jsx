import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

function AddForm() {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const [ title, setTitle ] = useState("")
    const [ load, setLoad ] = useState("")
    const [ reps, setReps ] = useState("")
    const [ error, setError ] = useState(null)
    const [emptyFormFields, setEmptyFormFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError("You must be logged in")
            return
        }

        const workout = { title, load, reps }

        const response = await fetch("http://localhost:5000/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFormFields(json.emptyFormFields)
        }

        if (response.ok) {
            setTitle("")
            setLoad("")
            setReps("")
            setError(null)
            setEmptyFormFields([])
            console.log(json)
            dispatch({type: "CREATE_WORKOUT", payload: json})
        }
    }

  return (
    <div>
        <form className="create" onSubmit={handleSubmit}>
            <h3> Add a new workout </h3>

            <label> Exercise title: </label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFormFields.includes("title") ? "error" : ""}
            />

            <label> Load (kg): </label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFormFields.includes("load") ? "error" : ""}
            />

            <label> Number of reps </label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFormFields.includes("reps") ? "error" : ""}
            />

            <button> Add workout </button>
            { error && <div className="error"> {error} </div>}

        </form>
    </div>
  )
}

export default AddForm