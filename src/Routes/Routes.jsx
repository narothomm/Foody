import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";

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
    }

    ]
  },
]);


export default router