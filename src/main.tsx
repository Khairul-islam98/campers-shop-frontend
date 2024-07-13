import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from 'sonner'
import '@smastrom/react-rating/style.css'
import "aos/dist/aos.css";
import AOS from 'aos'

AOS.init({
  duration: 1500,
  easing: 'ease-in-out',
  once: true,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster position="top-center"></Toaster>
    </Provider>
  </React.StrictMode>
);
