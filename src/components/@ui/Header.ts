import styled from "styled-components";

export const Header = styled.header`
  height: 64px;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows[2]};
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 12px;
`;
