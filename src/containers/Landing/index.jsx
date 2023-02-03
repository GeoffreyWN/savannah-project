import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'

const Navbar = lazy(() => import('../../components/Navbar'))
const Loader = lazy(() => import('../../components/Loader'))

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>SI | TEAM</title>
      </Helmet>

      <Suspense fallback={<Loader />}>
        <div className='bg-hero-one w-full h-screen bg-repeat bg-cover bg-left '>
          <Navbar />
          <div className='max-w-screen-xl w-full p-2 m-auto'>
            <div className='text-white px-10 mt-52 w-2/3 space-y-12'>
              <h1 className='font-extrabold font-montserrat text-7xl'>
                <span className='neonText'>MEET THE</span>{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sil'>
                  ALPHA
                </span>{' '}
                <span className='neonText'>TEAM</span>
              </h1>
              <h2 className='leading-loose'>
                We deliver interoperable, connected software solutions for healthcare
                service providers and consumers.We deliver interoperable, connected
                software solutions for healthcare service providers and consumers.We
                deliver interoperable, connected software solutions for healthcare service
                providers and consumers...
              </h2>

              <button type='button' className='login-btn'>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Landing
