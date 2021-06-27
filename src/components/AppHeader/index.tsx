import { Link } from "react-router-dom";
import { Header, HeaderButton } from "components/@ui/Header";

export const AppHeader = () => (
  <Header>
    <Link to="/">
      <HeaderButton>Home</HeaderButton>
    </Link>
  </Header>
);
