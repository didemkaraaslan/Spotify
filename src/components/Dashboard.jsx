import React from "react";
import { useDataLayerValue } from "../context/DataLayer";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import Footer from "./layout/Footer/Footer";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const [{ spotify }, dispatch] = useDataLayerValue();
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <Sidebar />
        <Content spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};

export default Dashboard;
