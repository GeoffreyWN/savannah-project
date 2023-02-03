import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { INDEX } from './RouteConstants'

const LandingPage = lazy(() => import('../Landing'))
const RequireAuth = lazy(() => import('./RequireAuth'))
const AuthenticatedRoutes = lazy(() => import('./AuthenticatedRoutes'))
const NotFoundPage = lazy(() => import('../NotFound'))
const Loader = lazy(() => import('../../components/Loader'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path={INDEX} element={<LandingPage />} />
          <Route
            path='/*'
            element={
              <RequireAuth>
                <AuthenticatedRoutes />
              </RequireAuth>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default AppRoutes
