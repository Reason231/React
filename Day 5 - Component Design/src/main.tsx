import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/auth/login";
import './assets/css/main.css'

const rootElem = ReactDOM.createRoot(document.getElementById("root") as any);
rootElem.render(
  <h1>
    {/* should be in the pair tag like html */}
    {/* <LoginPage /> */}
    <LandingPage></LandingPage>
  </h1>
);
