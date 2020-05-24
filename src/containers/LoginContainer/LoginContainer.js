import React from 'react';
import { useDispatch } from 'react-redux'
import { Creators as AuthActions } from '../../store/ducks/auth'

const LoginContainer = () => {
  const dispatch = useDispatch()

  const login = () => {
    dispatch(AuthActions.login('sr. batata', '123456'))
  }

  return (
    <>
      <button onClick={login} color="secondary" >acessar</button>
    </>
  );
};

export default LoginContainer;