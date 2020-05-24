import styled from "styled-components";
import theme from "../../styles/theme";
import bg from "../../assets/bg-contact.jpg";

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Intro = styled.div`
  background: url(${bg}) center center;
  background-attachment: fixed;
  background-size: cover;
  height: 70vh;
  width: 100%;
`;

export const IntroHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin-right: 20px;
`;

export const IntroContent = styled.div`
  padding: 10px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 72px;
    margin: -18px 0 8px 0;
    font-family: "Brush Script MT";
    color: ${theme.colors.secondary};
    text-shadow: 0px 0px 3px ${theme.colors.shadow};
    font-weight: 500;
    border-bottom: 4px solid ${theme.colors.primary};
    padding-left: 50px;
    padding-right: 50px;
  }
  p {
    font-size: 42px;
    margin: 0 0 24px 0;
    color: ${theme.colors.primary};
    text-shadow: 0px 0px 3px ${theme.colors.shadow};
    text-transform: uppercase;
  }
  span {
    padding: 10px;
    color: ${theme.colors.primary};
  }
  a {
    padding: 15px 40px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 2px;
    text-transform: uppercase;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 10px 1px ${theme.colors.shadow};
    }
  }
`;
