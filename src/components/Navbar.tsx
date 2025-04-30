import React from 'react'
import Logo from '../assets/Logo/logo.webp'

const Navbar = () => {
  return (
    <div>
        <nav className='flex gap-5'>
        <img className='w-1/13' src={Logo} alt="Logo" />
      <h1 className='mt-5'>Navbar</h1>
        </nav>
    </div>
  )
}

export default Navbar
