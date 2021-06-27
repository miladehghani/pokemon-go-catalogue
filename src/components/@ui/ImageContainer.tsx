import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  box-shadow: ${(props) => props.theme.shadows[4]};
  border-radius: 50%;
  margin: 8px 0;
  z-index: 10;

  @media (max-width: 580px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 580px) {
    width: 250px;
    height: 250px;
  }
`;
