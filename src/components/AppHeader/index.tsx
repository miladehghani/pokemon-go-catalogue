import { Header } from "components/@ui/Header";
import Logo from "assets/logo.png";

export const AppHeader = () => (
  <Header>
    <img src={Logo} height="80%" alt="pokemon-logo" />
  </Header>
);
