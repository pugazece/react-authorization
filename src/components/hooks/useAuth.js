import { AuthContext } from 'components/contexts/authContext'
import { useContext } from 'react'

const useAuth = () => useContext(AuthContext)

export default useAuth
