import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { LOGIN } from './RouteConstants'

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const isAuthenticated = true
  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to={LOGIN} replace state={{ path: location.pathname }} />
      )}
    </>
  )
}

RequireAuth.propTypes = {
  children: PropTypes.object
}

export default RequireAuth
