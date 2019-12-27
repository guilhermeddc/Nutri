import React from 'react';
import useStyles from './styles';

const Introduction = props => {
  const classes = useStyles()

  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.introHeader}>
          <div className={classes.introContent}>
            <h1>Cassi Pace</h1>
            <p>Nutricionista, Coach e Blogueira</p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
