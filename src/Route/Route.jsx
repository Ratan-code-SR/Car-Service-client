import Main from '../layout/Main.jsx';
import Home from '../pages/Home/Home/Home.jsx';
import { createBrowserRouter } from "react-router-dom";
import Register from '../pages/Register/Register.jsx';
import Login from '../pages/Login/Login.jsx';
import Error from '../pages/Error/Error.jsx'
import Checkout from '../pages/Checkout/Checkout.jsx';
import BookService from '../pages/BookService/BookService.jsx';
import Bookings from '../pages/Bookings/Bookings.jsx';
import PrivateRoute from '../components/protected/PrivateRoute.jsx';

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
            },
            {
                path:"/bookings",
                element:<PrivateRoute><Bookings/></PrivateRoute>
            },
            {
                path:"/checkout/:id",
                element:<PrivateRoute><Checkout/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }

        ],
    },
]);

export default router;