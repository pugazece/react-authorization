import { intersection } from 'lodash'
import { Outlet } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import Unauthorized from './Unauthorized'

const ProtectedRoute = ({ route }) => {
  const { user } = useAuth()

  const isAuthorized = intersection(route.allowedRoles, user.roles).length

  return isAuthorized ? <Outlet /> : <Unauthorized />
}

export default ProtectedRoute
