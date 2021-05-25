import React from "react";
import styles from "./admin.module.scss";
import { Menu } from "antd";
import Sidebar from "../../../components/admin_sidebar/sidebar.jsx";
import Settings from "../../../components/admin_settings/settings.jsx";

const AdminPage = () => {
  return (
    <div className={styles.body}>
      <Sidebar />
      <Settings />
    </div>
  );
};

export default AdminPage;
