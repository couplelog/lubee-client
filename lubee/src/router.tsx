import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "@pages/LoadingPage";
import InterceptorsPage from "@pages/InterceptorsPage";
import SplashPage from "@pages/SplashPage";
import LoginPage from "@pages/LoginPage";
import OnboardingPage from "@pages/OnboardingPage";
import TodayPicPage from "@pages/TodayPicPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <InterceptorsPage />,
    errorElement: <LoadingPage />,
    children: [
      { index: true, element: <SplashPage /> },
      { path: "/Splash", element: <SplashPage /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Onboarding", element: <OnboardingPage /> },
      { path: "/TodayPicPage", element: <TodayPicPage /> },
    ],
  },
]);

// children: [
//   {; index: true,; element: <SignIn /> },
//   {; path: "/signin",; element: <SignIn /> },
//   {
//;     path: "/vote",
//;     element: <VoteLayout />,
//;     children: [
//       {; path: "/vote/main",; element: <VoteMain /> },
//       {; path: "/vote/select/part",; element: <SelectPart /> },
//     ],
//   },
// ],
