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
import CartPage from "../Pages/CartPage/CartPage";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBoardAllFoods from "../Pages/Dashboard/DashBoardAllFoods";
import AdminRoute from "../privateRoutes/AdminRoute";

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
      path:'/category/:cat',
      element:<FoodsCategory/>
    },
    {
     path:'/cart',
     element:<CartPage/>
    }

    ]
  },

  {
    path:'dashboard',
    element:<AdminRoute> <DashBoardLayout/> </AdminRoute>,
    errorElement:<ErrorPage/>,
    children:[
          {
            path:'add-food',
            element:<AdminRoute> <AddFoodItem/> </AdminRoute>
          },
        {
          path:'update-food/:id',
          element:<AdminRoute> <UpdateFoodItem/></AdminRoute>
        },
        {
            path:'all-foods',
            element: <AdminRoute> <DashBoardAllFoods/> </AdminRoute>
        }
    ]
  }
]);


export default router