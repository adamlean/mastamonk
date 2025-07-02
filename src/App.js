import React from 'react';
import TrackList from './components/tracklist';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="app-container p-4">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Track List</h1>
        <TrackList />
      </div>
    </div>
  );
}

export default App;
