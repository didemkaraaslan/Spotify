import { StylesProvider } from "@material-ui/core";
import React from "react";
import styles from "./track.module.css";

const Track = ({ track, playSong }) => {
  return (
    <div className={styles.track} onClick={() => playSong(track.id)}>
      <img
        src={track.album.images[0].url}
        alt={"Album Image"}
        className={styles.album}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default Track;
