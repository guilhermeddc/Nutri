import React from 'react';
import Navbar from '../../components/NavBar';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import Streak from '../../components/Streak';


const HomeContainer = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <About/>
      <Streak/>
    </div>
  );
};

export default HomeContainer;