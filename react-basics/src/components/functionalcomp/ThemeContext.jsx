import React, { createContext, useContext, useState } from 'react'
const con2  =  createContext()
const ThemeContext = ({children}) => {
    const [themeMode,setThemeMode] =useState("light")
    const lightTheme = ()=>setThemeMode("light")
    const darkTheme = ()=>setThemeMode("dark")

    const styles = {
        backgroundColor:themeMode=="dark"?'gray':'white',
        height:"100%",
        color:themeMode=="dark"?'white':'black'
    }
  return (
    <con2.Provider value={{themeMode,lightTheme,darkTheme}}>
        <div style={styles}> {children}  </div>
    </con2.Provider>
  )
}
export default ThemeContext
export const useTheme = ()=>useContext(con2)