import { FC } from "react";
import { store } from "store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme";

const queryClient = new QueryClient();

export const TestAppProvider: FC = (props) => (
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
