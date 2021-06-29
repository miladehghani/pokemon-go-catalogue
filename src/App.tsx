import { UserRoutes } from "routes";
import { AppHeader as Header } from "components/AppHeader";
import { AppProvider } from "AppProvider";
import { persistStore } from "redux-persist";
import { store } from "store";
import { defaultTheme } from "theme";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();
let persistor = persistStore(store);

export const App = () => (
  <AppProvider
    store={store}
    persistor={persistor}
    queryClient={queryClient}
    theme={defaultTheme}
  >
    <Header />
    <UserRoutes />
  </AppProvider>
);
