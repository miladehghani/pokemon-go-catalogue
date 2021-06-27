import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "routes";
import { AppHeader as Header } from "components/AppHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const queryClient = new QueryClient();
let persistor = persistStore(store);

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <QueryClientProvider client={queryClient}>
          <UserRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
