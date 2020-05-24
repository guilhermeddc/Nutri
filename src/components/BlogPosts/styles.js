import styled from "styled-components";
import theme from "../../styles/theme";
import postImg from "../../assets/posts/sintomas-de-tireoide.png";

export const Container = styled.article`
  display: flex;
  border-bottom: 1px solid ${theme.colors.borderBottom};
  margin-bottom: 50px;
  padding-bottom: 50px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    span img {
      width: 24px;
      margin-right: 5px;
    }
    span p {
      line-height: 1.5;
      font-size: 16;
      font-weight: 400;
      color: red;
    }
    h2 {
      font-size: 24px;
      font-weight: 400;
    }
    > p {
      line-height: 1.5;
      font-size: 16px;
      font-weight: 300;
    }
    a {
      padding: 15px 40px;
      max-width: 160px;
      background: ${theme.colors.dark};
      color: ${theme.colors.white};
      border-radius: 2px;
      text-align: center;
      text-transform: uppercase;
      cursor: pointer;
      :hover {
        box-shadow: ${theme.boxShadow};
      }
    }
  }
`;

export const PostImg = styled.div`
  width: 70%;
  min-width: 260px;
  height: 250px;
  background: url(${postImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  margin: 0 30px 0 0;
  transition: all 0.3s;
  :hover {
    opacity: 0.9;
    box-shadow: ${theme.boxShadow};
    z-index: -1;
  }
`;
