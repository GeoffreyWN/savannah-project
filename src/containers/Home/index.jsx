import { lazy, Suspense } from 'react'

const Navbar = lazy(() => import('../../components/Navbar'))
const Users = lazy(() => import('../../components/Users'))
const Loader = lazy(() => import('../../components/Loader'))

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-hero-one w-full bg-repeat bg-cover bg-top '>
        <Navbar />
      </div>
      <Users />
    </Suspense>
  )
}

export default Home
