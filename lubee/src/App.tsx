import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "@styles/toast";

import { createBrowserRouter } from "react-router-dom";
import Settings from "settings";
import Splash from "splash";
import Login from "login";
import Congrats from "congrats";
import Mypage from "mypage";
import Upload from "upload";
import Home from "home";
import Today from "home/today";
import Month from "home/month";
import Onboarding from "onboarding";
import Error from "error";
import Fullpic from "fullpic";
import Date from "fullpic/date";
import One from "fullpic/one";
import First from "honey/first";
import Fifth from "honey/fifth";
import Join from "congrats/join";
import LoginCallback from "login/components/LoginCallback";
import Loading from "loading";
import Honey from "honey";
import Setting from "setting";
import Account from "setting/account";
import Couple from "setting/couple";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Settings />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Splash /> },
      { path: "/splash", element: <Splash /> },
      { path: "/loading", element: <Loading /> },
      { path: "/login", element: <Login /> },
      { path: "/api/users/kakao/simpleLogin", element: <LoginCallback /> },
      { path: "/onboarding", element: <Onboarding /> },
      {
        path: "/home",
        element: <Home />,
        children: [
          { path: "/home/today", element: <Today /> },
          { path: "/home/month", element: <Month /> },
        ],
      },
      { path: "/upload", element: <Upload /> },
      { path: "/congrats", element: <Congrats /> },
      { path: "/mypage", element: <Mypage /> },
      {
        path: "/fullpic",
        element: <Fullpic />,
        children: [
          { path: "/fullpic/:date", element: <Date /> },
          { path: "/fullpic/:date/:index", element: <One /> },
        ],
      },
      {
        path: "/congrats",
        element: <Congrats />,
        children: [{ path: "/congrats/join", element: <Join /> }],
      },
      {
        path: "/honey",
        element: <Honey />,
        children: [
          { path: "/honey/first", element: <First /> },
          { path: "/honey/fifth", element: <Fifth /> },
        ],
      },
      {
        path: "/setting",
        element: <Setting />,
        children: [
          { path: "/setting/account", element: <Account /> },
          { path: "/setting/couple", element: <Couple /> },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <RouterProvider router={Router} />
          <GlobalStyle />
          <StyledToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar
            closeButton={false}
            closeOnClick={false}
            pauseOnHover={false}
            draggable={false}
            rtl={false}
            pauseOnFocusLoss={false}
            limit={1}
          />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
