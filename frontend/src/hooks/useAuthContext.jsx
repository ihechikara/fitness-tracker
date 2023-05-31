import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error(" An error occured! Check context logic")
    }
    
    return context
}

export default useAuthContext