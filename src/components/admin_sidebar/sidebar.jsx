import React from "react";
import styles from "./sidebar.module.scss";
import { Menu } from "antd";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";
import vtb from "../../assets/logo_fav.png";
import settings from "../../assets/settings.svg";

const Sidebar = () => {
  const { SubMenu } = Menu;
  const handleClick = () => {
    console.log("click ");
  };
  return (
    <div className={styles.sidebar}>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        className={styles.sidebar}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item
          key="1"
          icon={<img src={settings} alt="settings" className={styles.logo} />}
        >
          Настройки
        </Menu.Item>
        <hr className={styles.line} />
        <Menu.Item
          key="2"
          icon={<img src={vtb} alt="vtb" className={styles.logo} />}
        >
          ВТБ
        </Menu.Item>
        <Menu.Item key="3" disabled={true} icon={<PlusOutlined />}>
          Добавить приложение
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
