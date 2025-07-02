import React from 'react';
import './tracklist.css';

const tracks = [
  {
    title: "BATTLE | Hard Boom Bap",
    time: "03:36",
    bpm: 93,
    tags: ["oldschool", "50 cent"],
    price: 29.99,
    image: "https://via.placeholder.com/50",
  },
  {
    title: "WRONG MOVE | Hard Boom Bap",
    time: "03:36",
    bpm: 93,
    tags: ["oldschool", "dark beat"],
    price: 29.99,
    image: "https://via.placeholder.com/50",
  },
  {
    title: "RECOVER | Gunna x Young Thug Type Beat",
    time: "03:28",
    bpm: 170,
    tags: ["young thug", "gunna"],
    price: 29.99,
    image: "https://via.placeholder.com/50",
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
