import React from 'react';
import {Intro, Container, IntroHeader, IntroContent} from './styles';

const BlogIntrodution = props => {
  return (
    <Intro>
      <Container>
        <IntroHeader>
          <IntroContent>
            <p>Bem Vindo ao meu Blog</p>
            <h1>Nutricionista</h1>
            <span>CRN-2 14472</span>
            <a href="#blog">Continue lendo</a>
          </IntroContent>
        </IntroHeader>
      </Container>
    </Intro>
  );
};

export default BlogIntrodution;
