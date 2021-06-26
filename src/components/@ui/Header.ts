import styled from "styled-components";
import { Button } from "./Button";

export const Header = styled.header`
  height: 64px;
  width: 100%;
  box-shadow: 0px 1px 4px 4px #a7a7a7;
  background: #2d4494;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 6px;
`;

export const HeaderButton = styled(Button)`
  height: 42px;
  width: 150px;
  font-size: 20px;
  font-weight: 600;
`;
