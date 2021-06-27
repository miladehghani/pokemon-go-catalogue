import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  margin: auto;
  border-radius: 4px;
  border: none;
  outline: none;
  background: ${(props) => props.theme.colors.grey[3]};
  padding: 1%;
  font-size: 1.2em;
`;
