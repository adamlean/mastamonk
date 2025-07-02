import React from 'react';
import { Download, Share2, ShoppingCart } from 'lucide-react';

const tracks = [
  {
    title: "BATTLE | Hard Boom Bap",
    time: "03:36",
    bpm: 93,
    tags: ["oldschool", "50 cent"],
    price: 29.99,
    image: "track1.jpg",
  },
  // другие треки
];

const TrackList = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="max-w-6xl mx-auto space-y-4">
        {tracks.map((track, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg shadow">
            <img src={track.image} alt={track.title} className="w-16 h-16 rounded" />

            <div className="flex-1">
              <div className="font-bold">{track.title}</div>
              <div className="text-sm text-zinc-400">
                {track.time} · {track.bpm} BPM
              </div>
              <div className="flex gap-2 mt-1">
                {track.tags.map((tag, i) => (
                  <span key={i} className="bg-white text-black text-xs rounded-full px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/10 rounded">
                <Download size={18} />
              </button>
              <button className="p-2 hover:bg-white/10 rounded">
                <Share2 size={18} />
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                <ShoppingCart size={16} className="inline-block mr-1" />
                ${track.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
