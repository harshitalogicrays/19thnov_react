import React, { useContext, useState } from 'react'

export const con1 = React.createContext() 
const MyFirstContextComp = ({children}) => {
    const [username,setUsername] =useState('Ram')
    const changeName = (str)=>setUsername(str)
  return (
    // <con1.Provider value="happy">
    //   {children}
    // </con1.Provider>

    <con1.Provider value={{username,changeName}}>
    {children}
  </con1.Provider>
  )
}
export default MyFirstContextComp
export const mycon1 = ()=>useContext(con1)