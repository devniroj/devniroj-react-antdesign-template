import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Home/Dashboard';
import Navbar from './features/layout/components/Navbar';
import KPIs from './pages/Home/KPIs';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
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
         <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
           <Routes>
             <Route path="/" element={<Dashboard />} />
             <Route path="/kpis" element={<KPIs />} />
           </Routes>
         </div>
       </Content>
       <Footer style={{ textAlign: 'center' }}>
         Ant Design ©2016 Created by Ant UED
       </Footer>
     </Layout>
    </>
  );
}

export default App;
