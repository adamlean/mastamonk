import React, { useState } from 'react';
import './TrackList.css'; // Подключи стили

const tracksData = [
  {
    title: 'Blazing Frenzy (Hip Hop)',
    author: 'Badaboom',
    genre: 'hiphop',
    time: '02:34',
    bpm: '140',
    key: 'C# Major',
    src: '../../public/audio/Blazing Frenzy.mp3',
  },
  {
    title: 'Ghosts of My Past (EDM)',
    author: 'Badaboom',
    genre: 'edm',
    time: '02:36',
    bpm: '140',
    key: 'C# Major',
    src: '../../public/audio/Ghosts of My Past.mp3',
  },
  {
    title: 'Ocean (Ambient)',
    author: 'Badaboom',
    genre: 'ambient',
    time: '03:02',
    bpm: '90',
    key: 'A Minor',
    src: 'audio/ocean.mp3',
  },
];

const genres = [
  { label: 'All', value: 'all' },
  { label: 'Hip-Hop', value: 'hiphop' },
  { label: 'EDM', value: 'edm' },
  { label: 'Ambient', value: 'ambient' },
];

export default function TrackList() {
  const [activeGenre, setActiveGenre] = useState('all');

  const filteredTracks =
    activeGenre === 'all'
      ? tracksData
      : tracksData.filter((track) => track.genre === activeGenre);

  return (
    <div className="playlist-container">
      <div className="genre-filter">
        {genres.map((g) => (
          <button
            key={g.value}
            className={`tab ${activeGenre === g.value ? 'active' : ''}`}
            onClick={() => setActiveGenre(g.value)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="track-list">
        {filteredTracks.map((track, index) => (
          <div className="track" key={index}>
            <div className="track-info">
              <p className="title">{track.title}</p>
              <p className="author">{track.author}</p>
            </div>
            <span className="time">{track.time}</span>
            <span className="bpm">{track.bpm}</span>
            <span className="key">{track.key}</span>
            <audio controls src={track.src}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}
