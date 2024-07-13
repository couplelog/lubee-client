import { createBrowserRouter } from "react-router-dom";
import Interceptor from "interceptor";
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
import First from "congrats/first";
import Fifth from "congrats/fifth";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Interceptor />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Splash /> },
      { path: "/splash", element: <Splash /> },
      { path: "/login", element: <Login /> },
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
        children: [
          { path: "/congrats/first", element: <First /> },
          { path: "/congrats/fifth", element: <Fifth /> },
        ],
      },
    ],
  },
]);
