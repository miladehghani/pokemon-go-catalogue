import styled from "styled-components";

interface GridProps {
  height?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;
  height: ${(props) => props.height || "100%"};
  width: 100%;
  overflow: hidden auto;
  padding: 1% 0;

  @media (min-width: 400.98px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 767.98px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 991.98px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1199.98px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
