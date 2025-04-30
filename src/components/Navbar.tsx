import Logo from '../assets/Logo/logo.webp'
import DarkModeToggle from './Games/DarkModeToggle'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between'>
        <img className='w-1/13' src={Logo} alt="Logo" />
      <h1 className='mt-5'>Navbar</h1>
       <DarkModeToggle/>
        </nav>
    </div>
  )
}

export default Navbar
