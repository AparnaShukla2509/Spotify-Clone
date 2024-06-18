// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Playlist from './components/Playlist';
import Player from './components/Player';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Search} />
          <Route path="/playlist/:id" component={Playlist} />
        </Routes>
        <Player />
      </div>
    </Router>
  );
}

export default App;
