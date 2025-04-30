import React from 'react'

import { FaWindows } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { IconType } from 'react-icons/lib';
import { Game } from '@/hooks/useGames';

interface Props{
    game:Game
}

const GamePlatform = ({game}:Props) => {
    const platformIconMap: Record<string, IconType> = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendoswitch,
        mac: FaApple,
        linux: FaLinux,
        ios: FaAppStoreIos,
        android: IoLogoAndroid,
        web: FaGlobe,
      }
      
  return (
    <div className="mt-2 flex gap-3 text-gray-600 dark:text-gray-300">
    {game.parent_platforms.map(({ platform }) => {
      const Icon = platformIconMap[platform.slug]
      return (
        Icon && (
          <Icon key={platform.id} title={platform.name} className="text-xl" />
        )
      )
    })}
  </div>
  )
}

export default GamePlatform
