import { NavLink } from 'react-router-dom'
import { icons, images } from '../../assets/images'
import { ALBUM, PHOTO, USER } from '../../containers/App/RouteConstants'
// import { ARR } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <nav>
      <div className=' mx-8 flex place-content-center'>
        {/* left div logo */}
        <div className='grow flex space-x-8 flex-wrap items-center'>
          <div>
            <img src={images.logo} alt='login' className='w-25 h-20 mr-10' />
          </div>

          <NavLink className='navlink-btn' to={USER}>
            Users
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
