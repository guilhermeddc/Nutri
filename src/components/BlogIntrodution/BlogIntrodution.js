import React from 'react';
import useStyles from './styles';

const BlogIntrodution = props => {
  const classes = useStyles()

  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <div className={classes.introHeader}>
          <div className={classes.introContent}>
            <p>Bem Vindo ao meu Blog</p>
            <h1>Nutricionista</h1>
            <span>CRN-2 14472</span>
            <a href="#blog">Continue lendo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIntrodution;
