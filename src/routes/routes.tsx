import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import Login from "src/pages/login/Login";
import Register from "src/pages/register/Register";

const router: ReturnType<typeof createBrowserRouter>  = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    }
])

export default router