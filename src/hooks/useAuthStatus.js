import { useEffect, useState, useRef } from "react"
import {getAuth, onAuthStateChanged} from 'firebase/auth'


export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCkeckingStatus] = useState(true)
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted){
            const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLoggedIn(true)
            }
            setCkeckingStatus(false)
        })
        }
        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    return (
        
    )
}
