import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme";

export const Wrapper: FC = (props) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};
