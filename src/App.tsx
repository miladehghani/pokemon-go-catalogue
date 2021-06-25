import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "routes";

export const App = () => (
  <BrowserRouter>
    <UserRoutes />
  </BrowserRouter>
);
