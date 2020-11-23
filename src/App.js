import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";
import { getTokenFromResponse } from "./spotify/spotify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useDataLayerValue } from "./context/DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();

    window.location.hash = "";

    const _token = hash["access_token"];
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          dispatch({ type: "SET_USER", user });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    spotify
      .getUserPlaylists()
      .then((playlists) => {
        console.log(playlists);
        dispatch({ type: "SET_PLAYLISTS", playlists });
      })
      .catch((error) => {
        console.error(error);
      });

    dispatch({
      type: "SET_SPOTIFY",
      spotify,
    });

    spotify
      .getPlaylist("37i9dQZF1DX9w1Quh8lR7W")
      .then((response) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response });
      })
      .catch((error) => {});

    spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    setLoading(false);
  }, [token, dispatch]);

  if (loading) return <h1>Loading..</h1>;

  return (
    <div className="app">
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" token={token} component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
