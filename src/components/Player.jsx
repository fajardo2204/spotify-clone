import { useEffect, useState, useRef } from "react";

// import { Pause } from "@/icons/Pause.astro";
// import { Play } from "@/icons/Play.astro";

export const Play = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg>
);

export const Pause = () => (
  <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 16 16" className="h-8 w-8"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
);

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = '/music/1/01.mp3';
  }, []);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    }
    else {
      audioRef.current.play();
      audioRef.current.volume = 0.5;
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>
        CurrentSong...
      </div>
      
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-2" onClick={ handleClick }>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      
      <div>
        Volume...
      </div>

      <audio ref={audioRef} />
    </div>
  );
}