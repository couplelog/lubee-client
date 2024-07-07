import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "@pages/LoadingPage";
import InterceptorsPage from "@pages/InterceptorsPage";
import SplashPage from "@pages/SplashPage";
import LoginPage from "@pages/LoginPage";
import OnboardingPage from "@pages/Onboarding/OnboardingPage";
import OnboardingCodePage from "@pages/Onboarding/OnboardingCodePage";
import OnboardingProfilePage from "@pages/Onboarding/OnboardingProfilePage";
import OnboardingProfileCustomPage from "@pages/Onboarding/OnboardingProfileCustomPage";
import OnboardingBirthPage from "@pages/Onboarding/OnboardingBirthPage";
import OnboardingAnnivPage from "@pages/Onboarding/OnboardingAnnivPage";

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
      { path: "/OnboardingCode", element: <OnboardingCodePage /> },
      { path: "/OnboardingProfile", element: <OnboardingProfilePage /> },
      { path: "/OnboardingProfileCustom", element: <OnboardingProfileCustomPage /> },
      { path: "/OnboardingBirth", element: <OnboardingBirthPage /> },
      { path: "/OnboardingAnniv", element: <OnboardingAnnivPage /> },
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
