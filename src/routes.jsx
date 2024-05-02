import React from "react";
// import { createBrowserRouter } from "react-router-dom";
import { LOGIN, PROFILE, PUBLIC, REGISTER, TOURS } from "./utils/variables";
// import App from "./App";
import LoginPage from "./pages/RegisterLoginPage/LoginPage";
import NotFoundPage from "./pages/NotFounPage/NotFoundPage";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Tours from "./pages/Tours/Tours";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

// const routes = [
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       // {
//       //   path: HOME,
//       //   element: <FirstScreen />,
//       // },
//       {
//         path: PUBLIC,
//         element: <FirstScreen />,
//       },
//       {
//         path: TOURS,
//         element: <Tours />,
//       },
//       {
//         path: LOGIN,
//         element: <LoginPage isLogin={true} />,
//       },
//       {
//         path: REGISTER,
//         element: <LoginPage isLogin={false} />,
//       },
//       {
//         path: "*",
//         element: <NotFoundPage />,
//       },
//     ],
//   },
// ];
export const routesApp = [
  // {
  //   path: HOME,
  //   element: <FirstScreen />,
  // },
  {
    path: PUBLIC,
    element: <FirstScreen />,
  },
  {
    path: TOURS,
    element: <Tours />,
  },
  {
    path: PROFILE,
    element: <ProfilePage />,
  },
  {
    path: LOGIN,
    element: <LoginPage isLogin={true} />,
  },
  {
    path: REGISTER,
    element: <LoginPage isLogin={false} />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
// export const router = createBrowserRouter(routes);
