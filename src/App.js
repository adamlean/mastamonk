import React from 'react';
import TrackList from './components/tracklist';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="app-container p-4">
        <h1 className="tracklist-title">Track List</h1>
        <TrackList />
      </div>
    </div>
  );
}

export default App;

