import React from "react";
import PropTypes from "prop-types";

import { Container, InputStyled } from "./styles";

const Input = ({ placeholder }) => {
  return (
    <Container>
      <InputStyled placeholder={placeholder} />
    </Container>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  placeholder: "",
  onClick: () => {},
};

export default Input;
