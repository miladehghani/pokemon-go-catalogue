import styled from "styled-components";

export const Button = styled.button`
  height: 24px;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
