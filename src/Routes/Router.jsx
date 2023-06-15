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
import Class from "../Pages/Class/Class";
import ErrorPage from "../Pages/Error/ErrorPage";
import StudentClass from "../Pages/Dashboard/Student/StudentClass";
import EnrollClass from "../Pages/Dashboard/Student/EnrollClass/EnrollClass";
import Instructorpage from "../Pages/Home/InstructorPage/Instructorpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path: "/class",
        element:<Class></Class>
      },
      {
        path:"/instructor",
        element:<Instructorpage></Instructorpage>
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
            path: "/dashboard/addclass",
            element: <AddaClass></AddaClass>,
          },
          {
            path: "/dashboard/instructorclass",
            element: <MyClass></MyClass>,
          },
          {
            path: "/dashboard/manageclass",
            element: (
              <PrivateRoute>
                <ManageClass></ManageClass>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/manageusers",
            element: <ManageUsers></ManageUsers>,
          },
          {
            path:"/dashboard/myclass",
            element:<PrivateRoute><StudentClass></StudentClass></PrivateRoute>
          },
          {
            path:"/dashboard/enrollclass",
            element:<EnrollClass></EnrollClass>
          }
         
        ],
      },
    ],
  },
]);

export default router;
