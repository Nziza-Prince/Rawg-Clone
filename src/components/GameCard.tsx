import { Game } from '@/hooks/useGames'
import React from 'react'
import GamePlatform from './GamePlatform'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-lg cursor-pointer h-full">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <p className="text-2xl my-5 font-semibold text-gray-800 dark:text-white truncate">
          {game.name}
        </p>
     <GamePlatform game={game}/>
      </div>
    </div>
  )
}

export default GameCard
