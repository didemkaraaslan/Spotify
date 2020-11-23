import React, { useEffect } from "react";
import cx from "classnames";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import styles from "./footer.module.css";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../../../context/DataLayer";

const Footer = ({ spotify }) => {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, []);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };

  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <img
          src={item?.album.images[0].url}
          alt={item?.name}
          className={styles.albumLogo}
        />
        {item ? (
          <div className={styles.info}>
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className={styles.info}>
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className={styles.center}>
        <ShuffleIcon className={cx(styles.icon, styles.colored)} />
        <SkipPreviousIcon className={styles.icon} onClick={skipNext} />
        <PlayCircleOutlineIcon
          className={styles.icon}
          fontSize="large"
          onClick={handlePlayPause}
        />
        <SkipNextIcon className={styles.icon} onClick={skipPrevious} />
        <RepeatIcon className={cx(styles.icon, styles.colored)} />
      </div>

      <div className={styles.right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="continuous-slider"
              style={{
                color: "#f7ff56",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
