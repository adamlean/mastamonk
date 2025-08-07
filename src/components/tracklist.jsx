import { useEffect, useRef, useState } from 'react';

const tracksData = [
  {
    title: 'Blazing Frenzy',
    
    genre: 'hiphop',
    time: '02:34',
    bpm: '140',
    key: 'C# Major',
    src: '../assets/audio/Blazing Frenzy.mp3',
  },
  {
    title: 'Ghosts of My Past',
    author: 'Masta Monk',
    genre: 'edm',
    time: '02:36',
    bpm: '140',
    key: 'C# Major',
    src: '../assets/audio/Ghosts of My Past.mp3',
  },
  {
    title: 'Ocean Flow',
    author: 'Badaboom',
    genre: 'ambient',
    time: '03:12',
    bpm: '90',
    key: 'A Minor',
    src: 'audio/ocean.mp3',
  },
  // Добавь больше треков по необходимости
];

const genres = ['all', 'hiphop', 'edm', 'ambient'];

export default function TrackList() {
  const [activeGenre, setActiveGenre] = useState('all');
  const audioRefs = useRef([]);

  useEffect(() => {
    // Добавляем авто-переход к следующему треку
    audioRefs.current.forEach((audio, index) => {
      if (!audio) return;

      audio.onended = () => {
        const next = audioRefs.current[index + 1];
        if (next) next.play();
      };

      audio.onplay = () => {
        // Останавливаем все остальные
        audioRefs.current.forEach((other, i) => {
          if (i !== index && other) {
            other.pause();
            other.currentTime = 0;
          }
        });
      };
    });
  }, [activeGenre]); // Перезапускаем логику при смене жанра

  const filteredTracks =
    activeGenre === 'all'
      ? tracksData
      : tracksData.filter((track) => track.genre === activeGenre);

  return (
    <div>
      <div className="genre-tabs">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`tab ${activeGenre === genre ? 'active' : ''}`}
            onClick={() => setActiveGenre(genre)}
          >
            {genre.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="track-list">
        {filteredTracks.map((track, index) => (
          <div className="track" key={index} data-genre={track.genre}>
            <div className="track-info">
              <p className="title">{track.title}</p>
              <p className="author">{track.author}</p>
            </div>
            <span className="time">{track.time}</span>
            <span className="bpm">{track.bpm}</span>
            <span className="key">{track.key}</span>
            <audio
              controls
              src={track.src}
              ref={(el) => (audioRefs.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
