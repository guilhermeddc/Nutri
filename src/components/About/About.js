import React from "react";
import {
  AboutStyled,
  Container,
  AboutContent,
  AboutImg,
  AboutInfo,
} from "./styles";
import photoAbout from "../../assets/about.jpeg";

const About = () => {
  return (
    <>
      <AboutStyled id="about">
        <h2>Sobre Mim</h2>
        <Container>
          <AboutContent>
            <AboutImg>
              <img src={photoAbout} alt="Cassiana Della Pace" />
            </AboutImg>
            <AboutInfo>
              <h3>Ola, eu sou Cassiana Della Pace - Nutricionista</h3>
              <p>
                Olá sou Cassiana, nutricionista em São Pedro do Sul, RS, esposa,
                evangélica e apaixonada por pessoas e cuidar de pessoas! Fico
                muito feliz com a sua visita ao meu blog, como disse antes sou
                apaixonada por pessoas e por cuidar de pessoas, então em tudo
                que eu puder ajudar eu quero ajudar! Seja com uma palavra de
                motivação, com uma receita diferente, com um novo jeito de ver a
                vida ou com a descoberta de novas prazeres e alegrias
                cotidianas! Será um prazer fazer parte da sua vida!
              </p>
            </AboutInfo>
          </AboutContent>
        </Container>
      </AboutStyled>
    </>
  );
};

export default About;
