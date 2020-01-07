import React from 'react';
// import { useDispatch } from 'react-redux'
// import { Creators as AuthActions } from '../../store/ducks/auth'
// import Button from '../../components/Button'
import Navbar from '../../components/NavBar'

const LoginContainer = () => {
  // const dispatch = useDispatch()

  // const login = () => {
  //   dispatch(AuthActions.login('sr. batata', '123456'))
  // }

  return (
    <div>
      <Navbar></Navbar>

      {/* <Button onClick={login} color="secondary" >acessar</Button> */}
    </div>
  );
};

export default LoginContainer;