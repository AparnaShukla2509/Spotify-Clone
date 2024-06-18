// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchTracks = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`);
      setResults(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      searchTracks();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((track) => (
          <div key={track.id}>
            <img src={track.album.images[0].url} alt={track.name} />
            <p>{track.name}</p>
            <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
