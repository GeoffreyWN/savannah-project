import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { USERS } from './RouteConstants'

const HomePage = lazy(() => import('../Home'))
const UserPage = lazy(() => import('../User'))
const AlbumPage = lazy(() => import('../Album'))
const Loader = lazy(() => import('../../components/Loader'))
const NotFoundPage = lazy(() => import('../NotFound'))

const AuthenticatedRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={USERS} element={<HomePage />} />
          <Route path='/users/:userId' element={<UserPage />} />
          <Route path='/albums/:albumId' element={<AlbumPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AuthenticatedRoutes
