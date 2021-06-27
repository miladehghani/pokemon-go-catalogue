import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  margin: auto;
  border-radius: 4px;
  border: none;
  outline: none;
  background: ${(props) => props.theme.colors.grey[3]};
  font-size: 1.2em;
`;
