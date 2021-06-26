import styled from "styled-components";

interface CardProps {
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
  box-shadow: 2px 2px 4px 2px #a7a7a7;
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius};`}

  ${(props) =>
    props.selected &&
    `
    background: #eeeeee;
    transform: scale(1.03);
  `}
`;
