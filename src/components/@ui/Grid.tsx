import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;
  height: 88vh;
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
