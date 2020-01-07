import React from 'react';
import useStyles from './styles';
import photoAbout from '../../assets/about.jpeg';

const About = () => {
  const classes = useStyles()

  return (
    <div id="about" className={classes.about}>
      <h2>Sobre Mim</h2>
      <div className={classes.container}>
        <div className={classes.aboutContent}>
          <div className={classes.aboutImg}>
            <img src={photoAbout} alt="Cassiana Della Pace"/>
          </div>
          <div className={classes.aboutInfo}>
            <h3>Ola, eu sou Cassiana Della Pace. Nutricionista</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi soluta ratione quisquam, dicta ab cupiditate iure eaque? Repellendus voluptatum, magni impedit eaque delectus, beatae maxime temporibus maiores quibusdam quasi.Rem magnam ad perferendis iusto sint tempora ea voluptatibus iure, animi excepturi modi aut possimus in hic molestias repellendus illo ullam odit quia velit. Qui expedita sit quo, maxime molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sapiente, consequuntur dolore praesentium non suscipit minus repudiandae, nesciunt placeat, vel nostrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
