'use client'
import { FC } from 'react'

interface DarkModeToggleProps {
  darkMode?: boolean
  setDarkMode?: (darkMode: boolean) => void
}
// <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />
const DarkModeToggle: FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  const handleClickDarkMode = () => {
    console.log(setDarkMode)
    if (setDarkMode) {
      setDarkMode(!darkMode)
    }
  }

  return (
    <button
      onClick={handleClickDarkMode}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? 'Sol' : 'Luna'}
    </button>
  )
}

export default DarkModeToggle
