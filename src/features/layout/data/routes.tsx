import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../../pages/Home/Dashboard";
import { KPIs } from "../../../pages/Home/KPIs";
import { App } from "antd";


export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/kpi",
            element: <KPIs />,
            
        }
    ])