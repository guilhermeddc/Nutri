import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const CardLogin = styled.div`
  max-width: 380px;
  width: 100%;
  height: 380px;
  border-radius: 4px;
  padding: 20px;
  background: ${theme.colors.light};
`;
