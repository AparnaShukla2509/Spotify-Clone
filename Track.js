// src/components/Track.js
import React from 'react';

const Track = ({ track }) => {
  return (
    <div className="track">
      <img src={track.album.images[0].url} alt={track.name} />
      <div className="track-details">
        <h3>{track.name}</h3>
        <p>Album: {track.album.name}</p>
        <p>Artist: {track.artists.map(artist => artist.name).join(', ')}</p>
        <audio controls>
          <source src={track.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default Track;
