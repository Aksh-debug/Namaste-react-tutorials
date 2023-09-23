import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Offline from "./components/Offline";
import { lazy,Suspense } from "react";



const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
} 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/",
                element:<Offline />
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Grocery data is loading........</h1>}><Grocery/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])





const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);