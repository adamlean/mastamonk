import React from 'react';
import TrackList from './components/tracklist';

function App() {
  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>🎵 Track List</h1>
      <TrackList />
    </div>
  );
}

export default App;
