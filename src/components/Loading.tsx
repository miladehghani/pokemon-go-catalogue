import Gif from "assets/loading.gif";
import styled from "styled-components";
import { Center } from "components/@ui/Center";

export const Loading = () => (
  <LoadingContiner>
    <img src={Gif} />
    <p>Loading ...</p>
  </LoadingContiner>
);

const LoadingContiner = styled(Center)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
  }

  p {
    margin: 0;
    font-s
  }
`;
