import React from 'react';
import Navbar from '../../components/NavBar';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import Streak from '../../components/Streak';
import Programs from '../../components/Programs';
import Recipes from '../../components/Recipes';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';


const HomeContainer = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Streak />
      <Programs />
      <Recipes />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeContainer;