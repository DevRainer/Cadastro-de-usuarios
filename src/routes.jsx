import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUserS/index";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },

    {
        path: '/Lista-de-usuario',
        element: <ListUsers />
    }


])
export default router