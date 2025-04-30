import useGames from '@/hooks/useGames'
import GameCard from './GameCard'
import LoadingSkeletons from './LoadingSkeleton'

const GameGrid = () => {
  const {data:games,error,isLoading} = useGames()
  console.log(games)
  if(error) return <p className='text-red-700'>{error.message}</p>  
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  {isLoading && skeletons.map(skeleton => (
    <LoadingSkeletons key={skeleton}/>
  ))}
  {!isLoading && games?.map(game => (
  <GameCard key={game.id} game={game}/>
  ))}
</div>

  )
}

export default GameGrid
