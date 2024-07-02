//import { Suspense } from "react";
import { Router } from "router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@styles/globalStyle";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
