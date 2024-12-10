import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import { api } from "./services/service.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider api={api}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>
);
