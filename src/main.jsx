import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { titleMockup } from "../src/mockup/name-mockup";

import Page1 from "./Pages/Page01/Page1";
import Page2 from "./Pages/Page02/Page2";
import Page3 from "./Pages/Page03/Page3";
import Page4 from "./Pages/Page04/Page4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "Tarefas",
    element: <Page2 id={titleMockup} />,
  },

  {
    path: "/Tarefas",
    element: <Page3 id={titleMockup} />,
  },
  {
    path: "/Page4",
    element: <Page4 id={titleMockup} />,
  },

  // {
  // path: "/",
  // element: <App/>,
  //},
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
