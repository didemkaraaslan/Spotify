import React from "react";
import styles from "./sidebar.module.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../context/DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className={styles.sidebar}>
      <img
        src={
          "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        }
        alt="Spotify Image"
        className={styles.logo}
      />
      <SidebarOption Icon={HomeIcon} title={"Home"} />
      <SidebarOption Icon={SearchIcon} title={"Search"} />
      <SidebarOption Icon={LibraryMusicIcon} title={"Your Library"} />
      <br />
      <strong className={styles.title}>PLAYLISTS</strong>
      <hr className={styles.divider} />

      {/* Yeni :) */}
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist?.id} title={playlist?.name} />
      ))}
    </div>
  );
};

export default Sidebar;
