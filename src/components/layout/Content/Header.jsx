import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../../context/DataLayer";
import styles from "./header.module.css";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <SearchIcon className={styles.searchIcon} />
        <input
          placeholder="Search for Artists, Songs or Podcasts"
          type="text"
          className={styles.search}
        />
      </div>
      <div className={styles.right}>
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />

        <h4 className={styles.displayName}>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
