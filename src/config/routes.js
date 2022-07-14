import { lazy } from 'react'
import { ROLES } from '../helpers/constants'

const Home = lazy(() => import('components/Home'))
const UserProfile = lazy(() => import('components/user/Profile'))
const AdminDashBoard = lazy(() => import('components/admin/Dashboard'))

const PATHS = Object.freeze({
  HOME: '/',
  USER_PROFILE: '/user/profile',
  ADMIN_DASHBOARD: 'admin/dashboard',
})

const ROUTES = Object.freeze([
  {
    element: Home,
    path: PATHS.HOME,
  },
  {
    element: UserProfile,
    path: PATHS.USER_PROFILE,
    allowedRoles: [ROLES.USER, ROLES.ADMIN],
  },
  {
    element: AdminDashBoard,
    path: PATHS.ADMIN_DASHBOARD,
    allowedRoles: [ROLES.ADMIN],
  },
])

export { PATHS }
export default ROUTES
