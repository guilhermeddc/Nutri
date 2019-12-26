import { lazy } from 'react'

const DashboardScreen = lazy(() => import('../pages/authenticated/Dashboard'))

const routes = {
  dashboard: {
    path: '/',
    exact: true,
    Component: DashboardScreen
  }
}

export default routes
