import { lazy } from 'react'

const DashboardPage = lazy(() => import('../pages/authenticated/Dashboard'))

const routes = {
  dashboard: {
    path: '/',
    exact: true,
    Component: DashboardPage
  }
}

export default routes
