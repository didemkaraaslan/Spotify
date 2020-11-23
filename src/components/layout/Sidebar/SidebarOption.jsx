import React from "react";
import styles from "./sidebarOption.module.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className={styles.option}>
      {Icon && <Icon className={styles.icon} />}
      {Icon ? (
        <h4 className={styles.iconTitle}>{title}</h4>
      ) : (
        <p className={styles.title}>{title}</p>
      )}
    </div>
  );
};

export default SidebarOption;
