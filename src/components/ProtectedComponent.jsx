import { intersection } from 'lodash'
import useAuth from './hooks/useAuth'

const ProtectedComponent = ({ children, requiredRoles = [] }) => {
  const { user } = useAuth()

  const isAuthorized = intersection(requiredRoles, user.roles).length

  return isAuthorized ? children : null
}

export default ProtectedComponent
