import React from 'react'
import useStyles from './styles';
import PropTypes from 'prop-types';

const Button = props => {
  const classes = useStyles();

  return(
    <a
      {...props}
      className={classes.Button}
    >
      {props.label}
    </a>
  )
}

Button.propTypes = {
  label: PropTypes.string
};

Button.defaultProps = {
  label: 'ok'
}

export default Button;