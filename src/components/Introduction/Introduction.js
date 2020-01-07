import React from 'react';
import useStyles from './styles';

const Introduction = props => {
  const classes = useStyles()

  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.introHeader}>
          <div className={classes.introContent}>
            <p>Nutricionista</p>
            <h1>Cassiana Della Pace</h1>
            <p>CRN-2 14472</p>
            <a href="#about">Saiba Mais</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
