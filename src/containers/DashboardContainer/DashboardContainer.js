import React from 'react';
import { useDispatch } from 'react-redux'
import { Creators as AuthActions } from '../../store/ducks/auth'
import Button from '../../components/Button'
import useStyles from './styles'

const DashboardContainer = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const logout = () => {
    dispatch(AuthActions.logout())
  }

  return (
    <div className={classes.container}>
      dashboard container

      {/* <Button onClick={logout}>sair</Button> */}
    </div>
  );
};

export default DashboardContainer;