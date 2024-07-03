import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "@pages/LoadingPage";
import InterceptorsPage from "@pages/InterceptorsPage";
import OnboardingPage from "@pages/OnboardingPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <InterceptorsPage />,
    errorElement: <LoadingPage />,
    children: [
      { index: true, element: <OnboardingPage /> },
      { path: "/onboarding", element: <OnboardingPage /> },
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