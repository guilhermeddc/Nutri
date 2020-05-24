import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const AboutStyled = styled.div`
  transition: all 0.35s;
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding: 50px 0;
    font-size: 32px;
    text-transform: uppercase;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 50px 0;
`;

export const AboutImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  img {
    border-radius: 5px;
    box-shadow: ${theme.boxShadow};
    min-width: 260px;
    transition: all 0.3s;
    :hover {
      opacity: 0.85;
    }
  }
`;

export const AboutInfo = styled.div`
  flex: 2;
  h3 {
    padding: 0 40px 10px;
    font-size: 24px;
  }
  p {
    padding: 10px 40px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 300;
    text-align: justify;
  }
`;
