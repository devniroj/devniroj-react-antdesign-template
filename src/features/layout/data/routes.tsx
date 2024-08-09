import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../../pages/Home/Dashboard";
import { KPIs } from "../../../pages/Home/KPIs";
import { App } from "antd";
import React from 'react'

const RoutesComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kpis" element={<KPIs />} />
      </Routes>
  )
}

export default RoutesComponent;
