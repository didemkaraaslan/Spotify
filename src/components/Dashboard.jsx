import React from "react";
import styles from "./dashboard.module.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import Footer from "./layout/Footer/Footer";

const Dashboard = ({ spotify }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <Sidebar />
        <Content spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
