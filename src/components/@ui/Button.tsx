import styled from "styled-components";

export const Button = styled.button`
  height: 24px;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme.primary}
  color: ${(props) => props.theme.secondary}
  font-size: 14px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
