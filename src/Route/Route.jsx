import Main from '../layout/Main.jsx';
import Home from '../pages/Home/Home/Home.jsx';
import { createBrowserRouter } from "react-router-dom";
import Register from '../pages/Register/Register.jsx';
import Login from '../pages/Login/Login.jsx';
import Error from '../pages/Error/Error.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // element: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            }

        ],
    },
]);

export default router;