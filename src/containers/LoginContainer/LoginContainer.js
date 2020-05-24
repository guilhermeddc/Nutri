import React from "react";
import { useDispatch } from "react-redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import { Container, CardLogin } from "./styles";

import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(AuthActions.login("sr. batata", "123456"));
  };

  return (
    <Container>
      <CardLogin>
        <Input />
        <Input />
        <Button onClick={login} label="acessar" />
      </CardLogin>
    </Container>
  );
};

export default LoginContainer;
