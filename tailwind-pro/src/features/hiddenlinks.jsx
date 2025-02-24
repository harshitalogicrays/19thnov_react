import { Navigate } from "react-router"

export const ShowOnLogin = ({children})=>{
    if(sessionStorage.getItem("19thnov") != null){
        return children
    }
    else return null
}

export const ShowOnLogout = ({children})=>{
    if(sessionStorage.getItem("19thnov") == null){
        return children
    }
    else return null
}

export const Protected = ({children})=>{
    if(sessionStorage.getItem("19thnov") != null){
        return children
    }
    else return <Navigate to='/login' replace={true}/>
}
