import React, { useEffect } from 'react'
import { useThemeStore } from '../store/ThemeStore'

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore()

  useEffect(() => {
    // Ensure the correct theme is applied on initial load
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-gray-200 dark:bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">Link 1</li>
          <li className="mb-2">Link 2</li>
          <li className="mb-2">Link 3</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">Main Content</h1>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded text-sm"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <p>This is the main section of the page.</p>
      </main>
    </div>
  )
}

export default Home
