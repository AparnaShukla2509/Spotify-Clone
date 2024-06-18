// src/components/Playlist.js
import React from 'react';

function Playlist({ match }) {
  const playlistId = match.params.id;

  // Fetch playlist data using playlistId

  return (
    <div>
      <h2>Playlist</h2>
      {/* Display playlist details */}
    </div>
  );
}

export default Playlist;
