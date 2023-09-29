import React, { useEffect, useState } from "react";
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
import UserContext from "../utils/UserContext";



const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{

    const [userName,setUserName]=useState();

    useEffect(()=>{
        // suppose an API call is made and we fetched the username and password for the logged in user
        const data={name:'Shobhit Rajawat'}
        setUserName(data.name);
    },[])

    return (
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
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