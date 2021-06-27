import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "routes";
import { AppHeader as Header } from "components/AppHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "store";

const queryClient = new QueryClient();

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <QueryClientProvider client={queryClient}>
        <UserRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>
);
