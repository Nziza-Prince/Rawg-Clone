import { Game } from '@/hooks/useGames'
import React from 'react'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-lg cursor-pointer">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {game.name}
        </p>
      </div>
    </div>
  )
}

export default GameCard
