import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
    {
     path:'/',
     element:<Home/>
    },
    {
      path:'/allfoods',
      element:<AllFoods/>
    },
    {
      path:'/signup',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    }

    ]
  },
]);


export default router