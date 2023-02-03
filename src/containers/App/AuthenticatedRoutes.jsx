import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HOME } from './RouteConstants'

const HomePage = lazy(() => import('../Home'))
const UserPage = lazy(() => import('../User'))
const AlbumPage = lazy(() => import('../Album'))
const Loader = lazy(() => import('../../components/Loader'))

const AuthenticatedRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path='user/:user_id' element={<UserPage />} />
          <Route path='album/:album_id' element={<AlbumPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AuthenticatedRoutes
