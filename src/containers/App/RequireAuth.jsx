import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { INDEX } from './RouteConstants'

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const user = localStorage.getItem('user')
  const isAuthenticated = user
  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to={INDEX} replace state={{ path: location.pathname }} />
      )}
    </>
  )
}

RequireAuth.propTypes = {
  children: PropTypes.object
}

export default RequireAuth
