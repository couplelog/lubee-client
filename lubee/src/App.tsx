import { Router } from "router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <RouterProvider router={Router} />
          <GlobalStyle />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
