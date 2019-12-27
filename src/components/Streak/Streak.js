import React from 'react';
import useStyles from './styles';
import quoteLeft from '../../assets/icons/quote_left.png';
import quoteRight from '../../assets/icons/quote_right.png';


const Streak = props => {
  const classes = useStyles()

  return (
    <div className={classes.streak}>
      <div className={classes.container}>
        <div className={classes.streakContent}>
          <h2>
            <span><img src={quoteLeft} alt="quote" /></span>
              A Fé é o que nos sustenta nos momentos amargos da vida.
            <span><img src={quoteRight} alt="quote" /></span>
          </h2>
          <p>~ Bispo Macedo.</p>
        </div>
      </div>
    </div>
  );
};

export default Streak;
