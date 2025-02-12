import React from 'react'
import { useTheme } from './ThemeContext'

const ThemeBtn = () => {
    const {themeMode,lightTheme,darkTheme} = useTheme()
    const handleTheme=(e)=>{
        if(e.target.checked){
            darkTheme()
        }
        else lightTheme()
    }
  return (
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" onClick={handleTheme} checked={themeMode=="dark"}/>
  </div>
  )
}

export default ThemeBtn
