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

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    console.log(id);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
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
          <PlayCircleFilledIcon
            className={styles.shuffle}
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks?.items.map((item) => (
          <Track key={item.track.id} track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
};

export default Content;
