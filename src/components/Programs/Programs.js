import React from 'react';
import useStyles from './styles';
import Soy from '../../assets/icons/soy.png';
import Strawberry from '../../assets/icons/strawberry.png';
import Tomato from '../../assets/icons/tomato.png';
import Broccoli from '../../assets/icons/broccoli.png';

const Programs = () => {

  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.programs}>
        <h2>Minhas especialidades</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum dolores reiciendis ad voluptas, animi obcaecati adipisci sapiente mollitia.
        </p>
      </div>
      <div className={classes.programsContent}>
        <div className={classes.card}>
          <img src={Strawberry} alt=""/>
          <p>Frutas</p>
        </div>
        <div className={classes.card}>
          <img src={Tomato} alt=""/>
          <p>Legumes</p>
        </div>
        <div className={classes.card}>
          <img src={Broccoli} alt=""/>
          <p>Verduras</p>
        </div>
        <div className={classes.card}>
          <img src={Soy} alt=""/>
          <p>Sementes</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;