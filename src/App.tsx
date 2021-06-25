import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "routes";
import { AppHeader as Header } from "components/AppHeader";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => (
  <BrowserRouter>
    <Header />
    <QueryClientProvider client={queryClient}>
      <UserRoutes />
    </QueryClientProvider>
  </BrowserRouter>
);
