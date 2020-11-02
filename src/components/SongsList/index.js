import React from "react";

import "./styles.css";

const SongsList = (props) => {
  const songs = props.items;
  return (
    <div className="songs-container">
      <h3 className="title">Songs list</h3>
      {songs && (
        <ol className="songs">
          {songs.map((item, index) => (
            <li key={index} className="song">
              <h4>Title: {item.track.track_name}</h4>
              <p>Artist: {item.track.artist_name} </p>
              <p>Album name: {item.track.album_name} </p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default SongsList;
