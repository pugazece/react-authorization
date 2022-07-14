import { ROLES } from 'helpers/constants'
import { intersection } from 'lodash'
import useAuth from './hooks/useAuth'

const Home = () => {
  const { user, setUser } = useAuth()

  const isUser = intersection([ROLES.USER], user.roles).length > 0
  const isAdmin = intersection([ROLES.ADMIN], user.roles).length > 0

  const loginAsUser = (e) => {
    e.preventDefault()
    setUser({ name: 'User', roles: [ROLES.USER] })
  }

  const loginAsAdmin = (e) => {
    e.preventDefault()
    setUser({ name: 'Admin', roles: [ROLES.ADMIN] })
  }

  return (
    <div>
      <h3>Home:</h3>
      <div>Accesible to everyone</div>

      <div className="button-container">
        {!isUser && <button onClick={loginAsUser}>Login as User</button>}
        {!isAdmin && <button onClick={loginAsAdmin}>Login as Admin</button>}
      </div>
    </div>
  )
}

export default Home
