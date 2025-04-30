import Logo from '../assets/Logo/logo.webp'
import DarkModeToggle from './Games/DarkModeToggle'

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md mb-10">
      <nav className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">GameHub</span>
        </div>
          <DarkModeToggle />
      </nav>
    </header>
  )
}

export default Navbar
