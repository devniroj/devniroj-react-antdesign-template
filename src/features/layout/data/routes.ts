import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../../pages/Home/Dashboard";


export const routes = createBrowserRouter(
    [
        {
            path: "/",
            Component: Dashboard
        }
    ])