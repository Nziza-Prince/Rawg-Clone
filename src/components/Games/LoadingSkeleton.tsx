import React from 'react'

const LoadingSkeletons = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden h-full animate-pulse">
      <div className="w-full h-64 bg-gray-300 dark:bg-gray-700" />
      <div className="p-4 space-y-2">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
        <div className="flex gap-2 mt-2">
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletons
