import { ROLES } from 'helpers/constants'
import useAuth from './hooks/useAuth'
import ProtectedComponent from './ProtectedComponent'

const Home = () => {
  const { setUser } = useAuth()

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
        <ProtectedComponent excludedRoles={[ROLES.USER]}>
          <button onClick={loginAsUser}>Login as User</button>
        </ProtectedComponent>
        <ProtectedComponent excludedRoles={[ROLES.ADMIN]}>
          <button className="secondary" onClick={loginAsAdmin}>
            Login as Admin
          </button>
        </ProtectedComponent>
      </div>
    </div>
  )
}

export default Home
