import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import UpdateFoodItem from "../Pages/UpdateFoodItem/UpdateFoodItem";
import FoodsCategory from "../Pages/FoodsCategory/FoodsCategory";

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
    },
     {
      path:'/add-food',
      element:<AddFoodItem/>
    },
    {
      path:'/update-food/:id',
      element:<UpdateFoodItem/>
    },
    {
      path:'/category/:cat',
      element:<FoodsCategory/>
    }

    ]
  },
]);


export default router