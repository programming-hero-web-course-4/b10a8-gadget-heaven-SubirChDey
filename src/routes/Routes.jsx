import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ErrorPage from "../pages/ErrorPage";
import Trending from "../pages/Trending";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,    
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),        
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch('../products.json'),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch('../products.json'),
          },
        ],
      },      
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "trending",
        element: <Trending></Trending>,
        loader: () => fetch('../products.json'),
      }
    ]
  },
]);

export default router