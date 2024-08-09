import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
            <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/kpi">KPIs</Link>
        </Menu.Item>
      </Menu>
  )
}

export default Navbar;
