import React from 'react'
import RouterSwitch from '../../components/RouterSwitch'
import withLayout from '../../layouts'
import routes from '../../routes/guest'

const GuestPagesRouter = props => <RouterSwitch routes={routes} {...props} />

export default withLayout('guest')(GuestPagesRouter)