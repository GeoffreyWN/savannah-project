import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from '../../firebase'

import {} from '../Home/store'
import { Link, useNavigate } from 'react-router-dom'
import { USERS } from '../App/RouteConstants'

const Navbar = lazy(() => import('../../components/Navbar'))
const Loader = lazy(() => import('../../components/Loader'))

const Landing = () => {
  const user = localStorage.getItem('user')
  const isAuthenticated = user

  const navigate = useNavigate()
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

  return (
    <>
      <Helmet>
        <title>SI | TEAM</title>
      </Helmet>

      <Suspense fallback={<Loader />}>
        <div className='bg-hero-one w-full h-screen bg-repeat bg-cover bg-left '>
          <Navbar />
          <div className='max-w-screen-xl w-full p-2 m-auto'>
            <div className='text-white px-4 md:px-10 mt-32 md:mt-52 w-full md:w-2/3 space-y-12'>
              <h1 className='font-extrabold font-montserrat text-2xl md:text-7xl'>
                <span className='neonText'>MEET THE</span>{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sil'>
                  ALPHA
                </span>{' '}
                <span className='neonText'>TEAM</span>
              </h1>
              <h2 className='leading-7 md:leading-loose pb-8'>
                We deliver interoperable, connected software solutions for healthcare
                service providers and consumers. We deliver interoperable, connected
                software solutions for healthcare service providers and consumers. We
                deliver interoperable, connected software soluti...
              </h2>

              {isAuthenticated ? (
                <button type='button' className='login-btn'>
                  <Link to={USERS}>Go to Dashboard</Link>
                </button>
              ) : (
                <button onClick={signInWithGoogle} type='button' className='login-btn'>
                  LOGIN
                </button>
              )}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Landing
