import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";

import { AuthProvider } from "./contexts/Auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
