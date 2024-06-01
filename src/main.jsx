import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Map from "./pages/Map.jsx";
import Leaflet from "./pages/Leaflet.jsx";

import "./main.scss";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/leaflet",
        element: <Leaflet />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
