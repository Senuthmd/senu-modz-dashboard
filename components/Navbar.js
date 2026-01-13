import { useState } from "react";

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
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

      <audio id="bg-music" loop>
        <source src="/music/bg-music.mp3" type="audio/mpeg" />
      </audio>
    </header>
  );
}
