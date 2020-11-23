import React from "react";
import { useDataLayerValue } from "../../../context/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Header from "./Header";
import Track from "./Track";
import styles from "./content.module.css";

const Content = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className={styles.content}>
      <Header spotify={spotify} />
      <div className={styles.banner}>
        <img
          src={discover_weekly?.images[0]?.url}
          alt=""
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          <strong>PLAYLIST</strong>
          <h2 className={styles.discover}>Discover Weekly</h2>
          <p className={styles.decription}>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className={styles.songs}>
        <div className={styles.icons}>
          <PlayCircleFilledIcon className={styles.shuffle} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks?.items.map((item) => (
          <Track key={item.id} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Content;
