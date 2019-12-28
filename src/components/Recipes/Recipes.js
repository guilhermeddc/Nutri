import React from 'react';
import useStyles from './styles';
import Steak from '../../assets/icons/steak.png';
import Seafood from '../../assets/icons/seafood.png';
import orangeJuice from '../../assets/icons/orange_juice.png';
import SteakRecipe from '../../assets/carne.jpg';
import FishRecipe from '../../assets/peixe.jpg';
import JuiceRecipe from '../../assets/suco.jpg';

const Recipes = () => {
  const classes = useStyles()

  return (
    <section className={classes.recipes}>
      <div className={classes.container}>
        <div className={classes.recipesHeader}>
          <h2>Dicas de receitas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iste provident, voluptatum voluptatibus aut modi aspernatur autem impedit, eius, debitis earum voluptatem. Quaerat hic aspernatur laborum.
          </p>
        </div>
        <div className={classes.recipesContent}>
          <div className={classes.card}>
            <img className={classes.cardImg} src={SteakRecipe} alt="foto da receita"/>
            <span>
              <img src={Steak} alt="icone"/>
              <p className={classes.tagSteak}>Carne</p>
            </span>
            <h3>This is title of the news</h3>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <a href="/">Mais detalhes</a>
          </div>
          <div className={classes.card}>
            <img className={classes.cardImg} src={FishRecipe} alt="foto da receita"/>
            <span>
              <img src={Seafood} alt="icone"/>
              <p className={classes.tagFish}>Peixes</p>
            </span>
            <h3>This is title of the news</h3>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <a href="/">Mais detalhes</a>
          </div>
          <div className={classes.card}>
            <img className={classes.cardImg} src={JuiceRecipe} alt="foto da receita"/>
            <span>
              <img src={orangeJuice} alt="icone"/>
              <p className={classes.tagJuice}>Sucos</p>
            </span>
            <h3>This is title of the news</h3>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <a href="/">Mais detalhes</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recipes;
