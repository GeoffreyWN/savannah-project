import { Link, NavLink } from 'react-router-dom'
import { icons, images } from '../../assets/images'
import { ALBUM, HOME, INDEX, PHOTO } from '../../containers/App/RouteConstants'
// import { ARR } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <nav className='max-w-screen-xl w-full py-4 px-2 m-auto'>
      <div className=' mx-8 flex place-content-center'>
        {/* left div logo */}
        <div className='grow flex space-x-8 flex-wrap items-center'>
          <Link to={INDEX}>
            <img src={images.logo} alt='login' className='w-25 h-20 mr-10' />
          </Link>

          <NavLink className='navlink-btn' to={HOME}>
            Home
          </NavLink>
          <NavLink className='navlink-btn' to={ALBUM}>
            Album
          </NavLink>
          <NavLink className='navlink-btn' to={PHOTO}>
            Photo
          </NavLink>
        </div>

        {/* right div btn */}
        <div className='flex space-x-2 items-center  '>
          <img src={icons.login} alt='login' className='w-5 h-5 cursor-pointer ' />
          <span className='navlink-btn'>Login </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
