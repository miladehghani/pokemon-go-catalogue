import styled from "styled-components";

interface ChipsProps {
  color?: string;
  background?: string;
}
export const Chips = styled.span<ChipsProps>`
  margin: 4px;
  padding: 6px 16px;
  border-radius: 16px;
  text-align: center;
  vertical-align: middle;

  background: ${(props) => props.background || "#fdc00d"};
  color: ${(props) => props.background || "#2d4494"};
`;
