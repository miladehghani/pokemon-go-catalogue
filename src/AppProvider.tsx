import { BrowserRouter as ReactRouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate as StorePersistProvider } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { FC } from "react";
import { Store } from "@reduxjs/toolkit";
import { Theme } from "types/theme";
import { Persistor } from "redux-persist/es/types";
import { Node } from "typescript";

interface AppProviderProps {
  store: Store;
  persistor: Persistor;
  persistorLoading?: Node;
  theme: Theme;
  queryClient: QueryClient;
}

export const AppProvider: FC<AppProviderProps> = (props) => (
  <StoreProvider store={props.store}>
    <StorePersistProvider
      loading={props.persistorLoading}
      persistor={props.persistor}
    >
      <ReactRouterProvider>
        <ThemeProvider theme={props.theme}>
          <QueryClientProvider client={props.queryClient}>
            {props.children}
          </QueryClientProvider>
        </ThemeProvider>
      </ReactRouterProvider>
    </StorePersistProvider>
  </StoreProvider>
);
