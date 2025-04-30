import useGenres from "@/hooks/useGenres"
import GameGrid from "./Games/GameGrid"
import GenreList from "./Genres/GenreList"

const Home = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Sidebar */}
     <GenreList/>
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
