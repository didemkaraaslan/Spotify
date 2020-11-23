import React, { useEffect } from "react";
import classes from "./login.module.css";
import styles from "./login.module.css";
import { loginUrl } from "../../spotify/spotify";
import backgroundImage from "../../images/background.jpg";
const Login = ({}) => {
  return (
    <div className={styles.login}>
      <img
        src={backgroundImage}
        alt={"Spotify Logo"}
        className={classes.logo}
      />
      {/* Login with Spotify button */}
      <a href={loginUrl} className={classes.loginButton}>
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};

export default Login;
