import React, { useState } from "react";
import { Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";

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
        Home
      </Menu.Item>
      <SubMenu
        key='SubMenu'
        icon={<SettingOutlined />}
        title='Navigation Three - Submenu'>
        <Menu.Item key='setting:1'>Option 1</Menu.Item>
        <Menu.Item key='setting:2'>Option 2</Menu.Item>
      </SubMenu>
      <SubMenu
        key='SubMenu'
        icon={<SettingOutlined />}
        title='Navigation Three - Submenu'>
        <Menu.Item key='setting:1'>Option 1</Menu.Item>
        <Menu.Item key='setting:2'>Option 2</Menu.Item>
      </SubMenu>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        Search
      </Menu.Item>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        Login
      </Menu.Item>
      <Menu.Item
        key='home'
        icon={<HomeOutlined />}
        style={{ justifyContent: "right" }}>
        Register
      </Menu.Item>
    </Menu>
  );
};

export default AppHeader;
