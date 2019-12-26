import React from 'react'
import RouterSwitch from '../../components/RouterSwitch'
import withLayout from '../../layouts'
import routes from '../../routes/authenticated'

const AuthenticatedPagesRouter = props => <RouterSwitch routes={routes} {...props} />

export default withLayout('authenticated')(AuthenticatedPagesRouter)
