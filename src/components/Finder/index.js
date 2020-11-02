import React, { useState } from "react";

import SongsList from "../SongsList";

import "./styles.css";

const Finder = () => {
  const [song, setSong] = useState("");
  const [songsWereFound, setSongsWereFound] = useState(false);
  const [songs, setSongs] = useState([]);

  const searchSong = async () => {
    let api = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${song}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`;

    try {
      const api_response = await fetch(api, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      displaySongs(api_response);
    } catch (error) {
      console.log(error);
    }
  };

  const displaySongs = (response) => {
    response.json().then((data) => {
      //data.message.body.track_list.map((item) => console.log(item.track));
      setSongsWereFound(true);
      setSongs(data.message.body.track_list);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchSong();
  };

  const handleChange = (event) => {
    setSong(event.target.value);
  };

  return (
    <>
      <h2>Finder</h2>
      <form onSubmit={handleSubmit}>
        <input className="search-input" type="text" onChange={handleChange} />
        <button className="search-btn" type="submit">Pesquisar</button>
      </form>
      {songsWereFound ? <SongsList items={songs} /> : `procurando por ${song}`}
    </>
  );
};

export default Finder;
