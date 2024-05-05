import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/index.tsx";
import Detail from "@/pages/Detail/index.tsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/detail",
        element: <Detail></Detail>
    }
])