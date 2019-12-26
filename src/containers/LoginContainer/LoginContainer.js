import React from 'react';
import { useDispatch } from 'react-redux'
import { Creators as AuthActions } from '../../store/ducks/auth'
import Button from '../../components/Button'

const LoginContainer = () => {
  const dispatch = useDispatch()

  const login = () => {
    dispatch(AuthActions.login('sr. batata', '123456'))
  }

  return (
    <div>
      login container

      <Button onClick={login} color="secondary" >acessar</Button>
    </div>
  );
};

export default LoginContainer;