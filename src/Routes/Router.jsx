import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddaClass from "../Pages/Dashboard/Instructor/AddaClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path:'/dashboard/addclass',
            element:<AddaClass></AddaClass>
          },
          {
            path:'/dashboard/instructorclass',
            element:<MyClass></MyClass>
          },
          {
            path:"/dashboard/manageclass",
            element:<PrivateRoute><ManageClass></ManageClass></PrivateRoute>
           
          },
          {
            path:"/dashboard/manageusers",
            element:<ManageUsers></ManageUsers>
          }

          
        ],
      },
    ],
  },
]);

export default router;
