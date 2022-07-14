import { PATHS } from 'config/routes'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from './hooks/useAuth'

const Header = () => {
  const navigate = useNavigate()
  const { user, setUser } = useAuth()

  const handleLogout = (e) => {
    e.preventDefault()
    setUser({})
    navigate(PATHS.HOME)
  }

  return (
    <header>
      <nav>
        <div className="menu">
          <Link to={PATHS.HOME}>Home</Link>
          <Link to={PATHS.USER_PROFILE}>User Profile</Link>
          <Link to={PATHS.ADMIN_DASHBOARD}>Admin Dashboard</Link>
        </div>

        <div className="user">
          <span>Hi, {user.name || 'Guest'}!</span>

          {user.name && (
            <Link to={PATHS.HOME} onClick={handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
