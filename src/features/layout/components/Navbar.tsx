import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
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
      </Menu>
  )
}
