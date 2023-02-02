import { lazy, Suspense } from 'react'

const Navbar = lazy(() => import('../../components/Navbar'))

const Landing = () => {
  return (
    <Suspense fallback='loading'>
      <div className='bg-hero-one w-full h-screen bg-repeat bg-cover bg-left '>
        <div className='max-w-screen-xl w-full p-2 z-10 m-auto'>
          <Navbar />

          <div className='text-white px-10 mt-52 w-2/3 space-y-12'>
            <h1 className='font-extrabold font-montserrat text-7xl'>
              MEET THE{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sil'>
                ALPHA
              </span>{' '}
              TEAM
            </h1>
            <h2 className='leading-loose'>
              We deliver interoperable, connected software solutions for healthcare
              service providers and consumers.We deliver interoperable, connected software
              solutions for healthcare service providers and consumers.We deliver
              interoperable, connected software solutions for healthcare service providers
              and consumers.
            </h2>

            <button type='button' className='login-btn'>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default Landing
