import { Header } from "components/@ui/Header";
import { Center } from "components/@ui/Center";
import Logo from "assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export const AppHeader = () => {
  const history = useHistory();
  const [showBackButton, setShowBackButton] = useState(false);
  history.listen((location) => {
    setShowBackButton(location.pathname !== "/");
  });

  return (
    <Header>
      {showBackButton && (
        <BackIcon className="material-icons" onClick={history.goBack}>
          arrow_back{" "}
        </BackIcon>
      )}
      <Center>
        <Link to="/" style={{ height: "80%" }}>
          <img src={Logo} height="60px" width="auto" alt="pokemon-logo" />
        </Link>
      </Center>
    </Header>
  );
};

const BackIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  font-size: 2.1em;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background: #a6a6a65c;
  }
`;
