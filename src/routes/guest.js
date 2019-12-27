import { lazy } from 'react'

const LoginPage = lazy(() => import('../pages/guest/Login'))
const HomePage = lazy(() => import('../pages/guest/Home'))

const routes = {
  login: {
    path: '/login',
    exact: true,
    Component: LoginPage
  },
  home: {
    path: '/',
    exact: true,
    Component: HomePage
  }
}

export default routes
