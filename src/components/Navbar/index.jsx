import { Link, useNavigate, NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { images } from '../../assets/images'
import { INDEX, USERS } from '../../containers/App/RouteConstants'
import {
  RectangleGroupIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import { auth } from '../../firebase'

const Navbar = () => {
  const user = localStorage.getItem('user')
  const isAuthenticated = user
  const navigate = useNavigate()
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful')
        navigate('/')
        localStorage.removeItem('user')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <nav className='max-w-screen-xl w-full py-4 px-2 m-auto'>
      <div className=' mx-8 flex place-content-center'>
        {/* left div logo */}
        <div className='grow flex space-x-8 flex-wrap items-center'>
          <Link to={INDEX}>
            <img src={images.logo} alt='login' className='w-25 h-20 mr-10' />
          </Link>
        </div>

        {/* right div btn */}

        {isAuthenticated ? (
          <div className='flex items-center space-x-6  '>
            <NavLink className='navlink-btn' to={USERS}>
              <RectangleGroupIcon className='h-6 w-6 text-sil' />
              <span>Dashboard</span>
            </NavLink>

            <button onClick={logOut} className='navlink-btn'>
              <ArrowRightOnRectangleIcon className='h-6 w-6 text-sil' />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <div className='flex space-x-2 items-center  '>
            <div className='navlink-btn'>
              <ArrowLeftOnRectangleIcon className='h-5 w-5 text-sil transform -scale-x-100' />
              <span>Login </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
