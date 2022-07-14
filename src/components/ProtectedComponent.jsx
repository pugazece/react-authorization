import { intersection } from 'lodash'
import useAuth from './hooks/useAuth'

const ProtectedComponent = ({ children, allowedRoles = [], excludedRoles = [] }) => {
  const { user } = useAuth()

  let isAuthorized = allowedRoles.length
    ? intersection(allowedRoles, user.roles).length
    : excludedRoles.length
    ? !intersection(excludedRoles, user.roles).length
    : true

  return isAuthorized ? children : null
}

export default ProtectedComponent
