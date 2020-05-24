import React from "react";
import PropTypes from "prop-types";

import { ButtonStyled } from "./styles";

const Button = ({ label, onClick }) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
