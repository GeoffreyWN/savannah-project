import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { INDEX, LOGIN } from './RouteConstants'

const Navbar = lazy(() => import('../../components/Navbar'))
const LandingPage = lazy(() => import('../Landing'))
const LoginPage = lazy(() => import('../Login'))
const RequireAuth = lazy(() => import('./RequireAuth'))
const AuthenticatedRoutes = lazy(() => import('./AuthenticatedRoutes'))
const NotFoundPage = lazy(() => import('../NotFound'))

const AppRoutes = () => {
  return (
    <Suspense fallback='loading'>
      <Router>
        <Navbar />
        <Routes>
          <Route path={INDEX} element={<LandingPage />} />
          <Route path={LOGIN} element={<LoginPage />} />
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
