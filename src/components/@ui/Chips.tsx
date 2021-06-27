import styled from "styled-components";

interface ChipsProps {
  active?: boolean;
  color?: string;
  background?: string;
}
export const Chips = styled.span<ChipsProps>`
  margin: 4px;
  padding: 6px 16px;
  border-radius: 16px;
  text-align: center;
  vertical-align: middle;

  ${(props) =>
    !props.active
      ? `background: ${props.background || "#fdc00d"};
            color: ${props.color || "#2d4494"};`
      : `background: ${props.color || "#2d4494"};
            color: ${props.background || "#fdc00d"};`}

  :hover {
    opacity: 0.7;
  }
`;
