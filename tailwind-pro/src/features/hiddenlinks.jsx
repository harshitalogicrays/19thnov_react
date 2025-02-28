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
        let obj = JSON.parse(sessionStorage.getItem("19thnov"))
        if(obj.role=="1") return children
        else return <Navigate to='/' replace={true}/>
    }
    else return <Navigate to='/login' replace={true}/>
}


export const ProtectedAdmin = ({children})=>{
    if(sessionStorage.getItem("19thnov") != null){
        let obj = JSON.parse(sessionStorage.getItem("19thnov"))
        console.log(obj)
        if(obj.role=="0") return children
        else return <Navigate to='/' replace={true}/>
    }
    else return <Navigate to='/login' replace={true}/>
}