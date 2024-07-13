import ErrorPage from "@/components/shared/ErrorPage";
import AboutUs from "@/pages/about us/AboutUs";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import ProductDetails from "@/pages/product details/ProductDetails";
import ProductManagement from "@/pages/product management/ProductManagement";
import Products from "@/pages/products/Products";
import Success from "@/pages/success/Success";
import Wishlist from "@/pages/wishlist/Wishlist";
import { createBrowserRouter } from "react-router-dom";
import App from "src/App";

const router: ReturnType<typeof createBrowserRouter>  = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products-details/:id",
                element: <ProductDetails />
            },
            {
                path: "/product-management",
                element: <ProductManagement />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/success",
                element: <Success />
            }
        ]
    },
   
])

export default router