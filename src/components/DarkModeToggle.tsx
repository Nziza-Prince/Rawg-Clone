import { useThemeStore } from '@/store/ThemeStore'
import React, { useEffect } from 'react'
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
    const {isDarkMode,toggleDarkMode} = useThemeStore()

    useEffect(()=>{
        document.documentElement.classList.toggle('dark',isDarkMode)
    },[isDarkMode])
  return (
    <div>
       {isDarkMode ? <FaSun className='text-2xl mt-5 cursor-pointer' onClick={toggleDarkMode}/> : <FaMoon className='text-2xl mt-5 cursor-pointer' onClick={toggleDarkMode}/>}
    </div>
  )
}

export default DarkModeToggle
