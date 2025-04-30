import GameGrid from "./GameGrid"

const Home = () => {
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

        </div>
        <GameGrid/>
      </main>
    </div>
  )
}

export default Home
