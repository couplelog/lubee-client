import { createBrowserRouter } from "react-router-dom";
import Interceptor from "interceptor";
import Loading from "loading";
import Splash from "splash";
import Login from "login";
import Congrats from "congrats";
import Mypage from "mypage";
import Upload from "upload";
import Home from "home";
import Today from "home/today";
import Month from "home/month";
import Onboarding from "onboarding";
import OnboardingLayout from "layout/OnboardingLayout";
import Code from "onboarding/code";
import Profile from "onboarding/profile";
import Custom from "onboarding/custom";
import Birth from "onboarding/birth";
import Anniversary from "onboarding/anniversary";
import Complete from "onboarding/complete";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Interceptor />,
    errorElement: <Loading />,
    children: [
      { index: true, element: <Splash /> },
      { path: "/splash", element: <Splash /> },
      { path: "/login", element: <Login /> },
      {
        path: "/onboarding",
        element: <OnboardingLayout />,
        children: [
          { path: "/onboarding", element: <Onboarding /> },
          { path: "/onboarding/code", element: <Code /> },
          { path: "/onboarding/profile", element: <Profile /> },
          { path: "/onboarding/custom", element: <Custom /> },
          { path: "/onboarding/birth", element: <Birth /> },
          { path: "/onboarding/anniversary", element: <Anniversary /> },
          { path: "/onboarding/complete", element: <Complete /> },
        ],
      },
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
      { path: "/onboarding/anniversary", element: <Anniversary /> },
    ],
  },
]);
