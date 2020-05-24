import styled from "styled-components";
import theme from "../../../styles/theme";

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 10px 40px;
  font-size: 18px;
  border: none;
  font-weight: 200 !important;
  border-radius: 4px;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
`;
