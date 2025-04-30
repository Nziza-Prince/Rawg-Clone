import useGames from '@/hooks/useGames'
import React from 'react'

const GameGrid = () => {
  const {data:games,error} = useGames()
  console.log(games)
  if(error) return <p className='text-red-700'>{error.message}</p>  

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  {games?.map(game => (
    <div key={game.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <p className="text-lg font-semibold">{game.name}</p>
    </div>
  ))}
</div>

  )
}

export default GameGrid
