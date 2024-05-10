import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import LoginSignUpPage from "./Pages/LoginSignupPage.jsx";
import { UserDataProvider } from "./Context/UserData.jsx";
import Events from "./Components/TPOcomponents/Events.jsx";
import InternshipBoard from "./Components/Internships/InternshipBoard.jsx";
import QueryForum from "./Components/QueryForum/QueryForum.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import InternshipTPO from "./Components/TPOcomponents/InternshipTPO.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserDataProvider>
        <Root />
      </UserDataProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <UserDataProvider>
            <LandingPage />
          </UserDataProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <LoginSignUpPage page="login" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/signup",
        element: <LoginSignUpPage page="" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/testing",
        element: <div>hello</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/event",
        element: (
          <UserDataProvider>
            <Events />
          </UserDataProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/internship",
        element: (
          <UserDataProvider>
            <InternshipBoard />{" "}
          </UserDataProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/forum",
        element: (
          <UserDataProvider>
            <QueryForum />{" "}
          </UserDataProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/TPO/internship",
        element: (
          <UserDataProvider>
            <InternshipTPO />
          </UserDataProvider>
        ),
        errorElement: <ErrorPage />,
      },

      {
        path: "/profile",
        element: (
          <UserDataProvider>
            <Profile />
          </UserDataProvider>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
