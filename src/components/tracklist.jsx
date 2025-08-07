import React from 'react';
import './tracklist.css';

const tracks = [
  {
    title: "Blazing Frenzy | Hard Boom Bap",
    time: "03:36",
    bpm: 93,
    tags: ["oldschool", "boom bap"],
    price: 29.99,
    image: "https://via.placeholder.com/50",
    audio: "../assets/audio/Blazing Frenzy.mp3",
  },
  {
    title: "Ghosts of My Past | Hard Boom Bap",
    time: "03:36",
    bpm: 93,
    tags: ["oldschool", "wu tang clan"],
    price: 29.99,
    image: "https://via.placeholder.com/50",
    audio: "../assets/audio/Ghosts of My Past.mp3",
  },
];

const TrackList = () => {
  return (
    <div className="track-list">
      {tracks.map((track, index) => (
        <div className="track-card" key={index}>
          <img src={track.image} alt="cover" className="track-image" />
          <div className="track-info">
            <h3>{track.title}</h3>
            <p>Time: {track.time} | BPM: {track.bpm}</p>
            <div className="tags">
              {track.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="track-actions">
            <button>⬇</button>
            <button>🔗</button>
            <button className="buy-btn">${track.price}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
