"use client"; // VERY IMPORTANT

import { useState, useRef } from "react";

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <header className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <span className="mr-4">senumodz@gmail.com</span>
      <button
        onClick={toggleMusic}
        className="bg-blue-500 px-4 py-2 rounded text-black font-bold"
      >
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </button>

      <audio ref={audioRef} loop>
        <source src="/music/bg-music.mp3" type="audio/mpeg" />
      </audio>
    </header>
  );
}
