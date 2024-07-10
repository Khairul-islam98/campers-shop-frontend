import Home from "@/pages/home/Home";
import Products from "@/pages/products/Products";
import { createBrowserRouter } from "react-router-dom";
import App from "src/App";

const router: ReturnType<typeof createBrowserRouter>  = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            }
        ]
    },
   
])

export default router