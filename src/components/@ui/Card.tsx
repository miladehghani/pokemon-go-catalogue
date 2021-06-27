import styled from "styled-components";

interface CardProps {
  position?: string;
  borderRadius?: string;
  selected?: boolean;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  width: 90%;
  height: 200px;
  box-shadow: ${(props) => props.theme.shadows[4]};

  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius};`}

  ${(props) =>
    props.selected &&
    `
      background: ${props.theme.colors.grey[3]};
      transform: scale(1.03);
    `};
`;
