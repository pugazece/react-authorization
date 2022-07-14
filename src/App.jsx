import 'assets/styles/global.css'
import AppRouter from 'components/AppRouter'
import { AuthProvider } from 'components/contexts/authContext'
import SuspenseFallback from 'components/SuspenseFallback'
import { Suspense, useState } from 'react'

const App = () => {
  const [user, setUser] = useState({})

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <AuthProvider value={{ user, setUser }}>
        <AppRouter />
      </AuthProvider>
    </Suspense>
  )
}

export default App
