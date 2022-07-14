import ROUTES from 'config/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import PageNotFound from './PageNotFound'
import ProtectedRoute from './ProtectedRoute'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {ROUTES.map((route) => {
            const { path, element: Element, allowedRoles = [] } = route

            if (!allowedRoles.length) return <Route key={path} path={path} element={<Element />} />

            return (
              <Route key={path} element={<ProtectedRoute route={route} />}>
                <Route path={path} element={<Element />} />
              </Route>
            )
          })}

          {/* No matching route */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
