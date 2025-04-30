import React, { useState } from 'react'
import { Badge } from './ui/badge'

interface Props{
    score:number
}

const CriticScore = ({score}:Props) => {
    let colorClass = 'bg-gray-300 text-black'

    if (score > 0 && score <= 40) colorClass = 'bg-red-500 text-white'
    else if (score > 40 && score < 70) colorClass = 'bg-yellow-400 text-black'
    else if (score >= 70) colorClass = 'bg-green-300 text-white'
  return (
    <div>
      <Badge className={colorClass}>{score}</Badge>
    </div>
  )
}

export default CriticScore
