import { lazy } from 'react'

const LoginScreen = lazy(() => import('../pages/guest/Login'))

const routes = {
  login: {
    path: '/',
    exact: true,
    Component: LoginScreen
  }
}

export default routes
