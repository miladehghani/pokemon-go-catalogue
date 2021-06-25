import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "routes";
import { AppHeader as Header } from "components/AppHeader";

export const App = () => (
  <BrowserRouter>
    <Header />
    <UserRoutes />
  </BrowserRouter>
);
