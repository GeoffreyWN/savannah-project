import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../assets/images'
import { INDEX } from '../App/RouteConstants'
import { FaceFrownIcon } from '@heroicons/react/24/outline'

const Navbar = lazy(() => import('../../components/Navbar'))

const Loader = lazy(() => import('../../components/Loader'))

const NotFound = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-hero-one w-full bg-repeat bg-cover bg-top '>
        <Navbar />
      </div>
      <div className='flex flex-col items-center space-y-20 w-1/3 mx-auto my-20'>
        <img loading='lazy' src={icons.notFound} alt='404' />
        <div className='flex items-center space-x-3'>
          <h1 className='text-xl font-montserrat font-semibold'>
            Sorry requested page was not found
          </h1>
          <FaceFrownIcon className='h-10 w-10 text-sil-dark' />
        </div>

        <Link className='go-home-btn' to={INDEX}>
          GO HOME ...
        </Link>
      </div>
      <div></div>
    </Suspense>
  )
}

export default NotFound
