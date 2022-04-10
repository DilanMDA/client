import React, { useState } from "react";
import { Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const handleClick = (event) => {
    // console.log(e.key);
    setCurrent(event.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
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
    </Menu>
  );
};

export default Header;
