/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { images } from '../../assets/images'
import { INDEX, USERS } from '../../containers/App/RouteConstants'
import {
  RectangleGroupIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'
import { auth, provider } from '../../firebase'

const Navbar = () => {
  const navigate = useNavigate()

  const user = localStorage.getItem('user')
  const isAuthenticated = user

  const userInfo = JSON.parse(user)
  const [userPhoto, setUserPhoto] = useState()

  useEffect(() => {
    setUserPhoto(userInfo?.photoURL)
  }, [userInfo])

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { email, displayName, photoURL } = result.user
        const user = { email, displayName, photoURL }

        localStorage.setItem('user', JSON.stringify(user))

        navigate('/users')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(errorCode, errorMessage, email, credential)
      })
  }

  const notify = () =>
    toast.success('Sign out successful!', {
      duration: 6000,
      position: 'bottom-center'
    })
  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        notify()
        localStorage.removeItem('user')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <nav className='max-w-screen-xl md:w-full py-4 px-4 md:px-8 m-auto'>
      <Toaster />
      <div className='flex items-center justify-between'>
        {/* left div logo */}
        <div>
          <Link to={INDEX}>
            <img src={images.logo} alt='login' className='h-16 md:w-25 md:h-20' />
          </Link>
        </div>

        {/* right div btn */}

        {isAuthenticated ? (
          <>
            <div className='hidden md:flex items-center space-x-6   '>
              <NavLink className='navlink-btn' to={USERS}>
                <RectangleGroupIcon className='h-6 w-6 text-sil' />
                <span>Users</span>
              </NavLink>

              <button onClick={logOut} className='navlink-btn'>
                <ArrowRightOnRectangleIcon className='h-6 w-6 text-sil' />
                <span>Sign Out</span>
              </button>

              <img
                src={userPhoto}
                alt='user'
                className='rounded-full w-8 cursor-pointer'
              />
            </div>
            <div className='md:hidden'>
              <div className='font-montserrat'>
                <Menu as='div' className='relative text-left'>
                  <div>
                    <Menu.Button className=' rounded-md bg-black bg-opacity-20 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      <Bars3Icon
                        className=' h-5 w-5 text-violet-200 hover:text-violet-100'
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='px-1 py-1 '>
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink to={USERS}>
                              <button
                                className={`${
                                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <RectangleGroupIcon
                                    className='mr-2 h-5 w-5 text-sil'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <RectangleGroupIcon
                                    className='mr-2 h-5 w-5 text-sil'
                                    aria-hidden='true'
                                  />
                                )}
                                Dashboard
                              </button>
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logOut}
                              className={`${
                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <ArrowRightOnRectangleIcon
                                  className='mr-2 h-5 w-5 text-sil'
                                  aria-hidden='true'
                                />
                              ) : (
                                <ArrowRightOnRectangleIcon
                                  className='mr-2 h-5 w-5 text-sil'
                                  aria-hidden='true'
                                />
                              )}
                              Sign Out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </>
        ) : (
          <div className='flex space-x-2 items-center  '>
            <div onClick={signInWithGoogle} className='navlink-btn'>
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
