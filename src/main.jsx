import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { InsertContent } from "./pages/InsertContent.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";
import { SearchResult } from "./components/search/SearchResult.jsx";
// import SearchResultItem from './components/SearchResultItem.jsx';
import SingleResource from "./pages/SingleResource.jsx";
import { GroupesDiscussion } from "./pages/GroupesDiscussion.jsx";
import { HealthProfessionals } from "./pages/HealthProfessionals.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "", element: <Home /> },
      { path: "insert", element: <InsertContent /> },
      { path: "contact", element: <Contact /> },
      { path: "resource", element: <SearchResult /> },
      { path: "resource/:id", element: <SingleResource /> },
      { path: "health-professionals", element: <HealthProfessionals /> },
      { path: "support-groupes", element: <GroupesDiscussion /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
