import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button'
import useStyles from './styles'

const Button = props => {
  const classes = useStyles()

  return (
    <MuiButton
      {...props}
      classes={{
        label: classes.label
      }}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.string
};

Button.defaultProps = {
  variant: 'contained'
}

export default Button;