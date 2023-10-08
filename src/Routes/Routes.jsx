import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPages/ErrorPages";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../../Services";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
   {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('data.json')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }, 
        {
            path: "/services",
            element: <PrivateRoute><Services></Services></PrivateRoute>
        }
    ]
   }
])

export default router;