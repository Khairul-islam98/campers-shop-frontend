import { createBrowserRouter } from "react-router-dom";
import App from "src/App";

const router: ReturnType<typeof createBrowserRouter>  = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
   
])

export default router