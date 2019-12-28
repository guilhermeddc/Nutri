import React from 'react';
import Navbar from '../../components/NavBar';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import Streak from '../../components/Streak';
import Programs from '../../components/Programs';
import Recipes from '../../components/Recipes';


const HomeContainer = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <About/>
      <Streak/>
      <Programs/>
      <Recipes/>
    </div>
  );
};

export default HomeContainer;