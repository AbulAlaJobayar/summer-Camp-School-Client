import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../providers/AuthProvider'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
   
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
