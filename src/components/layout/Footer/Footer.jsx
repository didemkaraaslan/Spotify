import React from "react";
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

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <img
          src="https://i.scdn.co/image/ab67616d00004851cece42c5eb2823e9a2a1f1eb"
          alt=""
          className={styles.albumLogo}
        />
        <div className={styles.info}>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className={styles.center}>
        <ShuffleIcon className={cx(styles.icon, styles.colored)} />
        <SkipPreviousIcon className={styles.icon} />
        <PlayCircleOutlineIcon className={styles.icon} fontSize="large" />
        <SkipNextIcon className={styles.icon} />
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
