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
      ? `background: ${props.background || props.theme.colors.primary};
            color: ${props.color || props.theme.colors.secondary};`
      : `background: ${props.color || props.theme.colors.secondary};
            color: ${props.background || props.theme.colors.primary};`}

  :hover {
    opacity: 0.7;
  }
`;
