import Gif from "assets/loading.gif";
import styled from "styled-components";
import { Center } from "components/@ui/Center";

export const Loading = () => (
  <LoadingContiner>
    <img alt={"loading"} src={Gif} />
    <p>Loading ...</p>
  </LoadingContiner>
);

const LoadingContiner = styled(Center)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;

  img {
    width: 300px;
    height: auto;
    border-radius: 24px 24px 0 0;
  }

  p {
    margin: 0;
    font-s
  }
`;
