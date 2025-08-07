import React, { useState, useRef, useEffect } from 'react';
import './tracklist.css';

const tracksData = [
  {
    title: 'Blazing Frenzy',
    genre: 'g funk',
    time: '02:34',
    key: 'C# Major',
    src: '/audio/Blazing Frenzy.mp3',
  },
  {
    title: 'Ghosts of My Past',
    genre: 'boom bap',
    time: '02:36',
    key: 'C# Major',
    src: '/audio/Ghosts of My Past.mp3',
  },
  {
    title: 'Ocean',
    genre: 'ambient',
    time: '03:02',
    key: 'A Minor',
    src: 'audio/ocean.mp3',
  },
];

const genres = [
  { label: 'All', value: 'all' },
  { label: 'Boom Bap', value: 'boom bap' },
  { label: 'G Funk', value: 'g funk' },
  { label: 'Ambient', value: 'ambient' },
];

export default function TrackList() {
  const [activeGenre, setActiveGenre] = useState('all');
  const audioRefs = useRef([]);

  const filteredTracks =
    activeGenre === 'all'
      ? tracksData
      : tracksData.filter((track) => track.genre === activeGenre);

  // Очистить ref-массив при каждом фильтре (иначе длина будет неправильная)
  useEffect(() => {
    audioRefs.current = [];
  }, [activeGenre]);

  const handlePlay = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  return (
    <div className="tracks-section">
      <h2 className="tracklist-heading">Track List</h2>

      <div className="genre-tabs">
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
            </div>
            <span className="time">{track.time}</span>
            <span className="key">{track.key}</span>
            <audio
              controls
              controlsList="nodownload noplaybackrate"
              src={track.src}
              ref={(el) => (audioRefs.current[index] = el)}
              onPlay={() => handlePlay(index)}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
