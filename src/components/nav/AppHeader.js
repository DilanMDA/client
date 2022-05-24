import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const AppHeader = () => {
  const [current, setCurrent] = useState("home");
  const centerStyle = {
    position: "relative",
    display: "flex",
    type: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f0f7fa",
    borderColor: "#c8cbcc",
    margin: "0 10px",
    borderRadius: "5px",
  };

  // const rightStyle = { position: "absolute", top: 0, right: 0 };
  const handleClick = (event) => {
    // console.log(e.key);
    setCurrent(event.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      style={centerStyle}
      mode='horizontal'>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='about' icon={<HomeOutlined />}>
        <Link to='/'>About</Link>
      </Menu.Item>
      {/* <SubMenu
        key='SubMenu1'
        icon={<SettingOutlined />}
        title='Navigation Three - Submenu'>
        <Menu.Item key='setting:1'>Option 1</Menu.Item>
        <Menu.Item key='setting:2'>Option 2</Menu.Item>
      </SubMenu> */}
      {/* <SubMenu
        key='SubMenu2'
        icon={<SettingOutlined />}
        title='Navigation Three - Submenu'>
        <Menu.Item key='setting:1'>Option 1</Menu.Item>
        <Menu.Item key='setting:2'>Option 2</Menu.Item>
      </SubMenu> */}
      <Menu.Item key='search' icon={<HomeOutlined />}>
        Search
      </Menu.Item>
      <Menu.Item key='login' icon={<UserOutlined />}>
        <Link to='/login'>Login</Link>
      </Menu.Item>
      <Menu.Item key='register' icon={<UserAddOutlined />}>
        <Link to='/register'>Register</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppHeader;
