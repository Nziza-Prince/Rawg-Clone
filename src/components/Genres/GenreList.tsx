import useGenres from '@/hooks/useGenres'
import React from 'react'

const GenreList = () => {
    const {data:genres} = useGenres()

  return (
    <div className='border-r p-3'>
<h2 className="text-xl font-bold mb-4">Genres</h2>
        <ul className='flex flex-col gap-5'>
          {genres?.map(genre => (
            <li key={genre.id} className='flex align-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded transition w-full'>
                <img className='w-10 h-10 rounded-md' src={genre.image_background} alt="" />

                {genre.name}</li>
          ))}
        </ul> 
    </div>
  )
}

export default GenreList
