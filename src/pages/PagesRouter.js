import React, { Suspense } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../store/selectors/auth'
import AuthenticatedPagesRouter from './authenticated/AuthenticatedPagesRouter'
import GuestPagesRouter from './guest/GuestPagesRouter'
import globalStyles from '../styles/globalStyles'

const PagesRouter = () => {
  const authenticated = useSelector(selectIsAuthenticated)
  const RouterContext = authenticated ? AuthenticatedPagesRouter : GuestPagesRouter

  return (
    <Router>
      <Suspense fallback={<div />}>
        <RouterContext />
      </Suspense>
    </Router>
  )
}

export default withStyles(globalStyles)(PagesRouter)
