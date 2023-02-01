import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HOME } from './RouteConstants'

const HomePage = lazy(() => import('../Home'))

const AuthenticatedRoutes = () => {
  return (
    <>
      <Suspense fallback='loading'>
        <Routes>
          <Route path={HOME} element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AuthenticatedRoutes
