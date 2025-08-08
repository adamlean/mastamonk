import React, { useState, useRef, useEffect } from "react";
import "./tracklist.css";
import tracksData from "../data/tracks.json";

const genres = [
  { label: "All", value: "all" },
  { label: "Boom Bap", value: "boom bap" },
  { label: "G Funk", value: "g funk" },
  { label: "Ambient", value: "ambient" }
];

export default function TrackList() {
  const [activeGenre, setActiveGenre] = useState("all");
  const audioRefs = useRef([]);

  const filteredTracks =
    activeGenre === "all"
      ? tracksData
      : tracksData.filter((track) => track.genre === activeGenre);

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
            className={`tab ${activeGenre === g.value ? "active" : ""}`}
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
