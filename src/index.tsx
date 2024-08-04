import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Layout, Menu, Breadcrumb, App } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Navbar } from './features/layout/components/Navbar';
import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { routes } from './features/layout/data/routes';
import Dashboard from './pages/Home/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <div className="logo" />
        <Navbar />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {/* <RouterProvider router={routes}/> */}
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <RouterProvider router={routes}></RouterProvider>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
