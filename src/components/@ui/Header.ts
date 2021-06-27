import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  height: 64px;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows[2]};
  background: ${(props) => props.theme.colors.primary};
  margin-bottom: 12px;
`;
