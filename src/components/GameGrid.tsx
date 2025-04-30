import useGames from '@/hooks/useGames'
import React from 'react'
import GameCard from './GameCard'

const GameGrid = () => {
  const {data:games,error} = useGames()
  console.log(games)
  if(error) return <p className='text-red-700'>{error.message}</p>  

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  {games?.map(game => (
  <GameCard key={game.id} game={game}/>
  ))}
</div>

  )
}

export default GameGrid
