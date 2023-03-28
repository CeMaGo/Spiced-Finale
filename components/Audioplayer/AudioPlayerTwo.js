import { useState, useEffect, useRef } from "react";

function AudioPlayerTwo({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [gainNode, setGainNode] = useState(null);
  const isSourceConnected = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = audioRef.current;

      const context = new window.AudioContext();
      const gain = context.createGain();

      if (!isSourceConnected.current) {
        const sourceNode = context.createMediaElementSource(audio);
        sourceNode.connect(gain);
        isSourceConnected.current = true;
      }

      gain.connect(context.destination);
      gain.gain.setValueAtTime(2, context.currentTime);

      setAudioContext(context);
      setGainNode(gain);
    }
  }, []);

  useEffect(() => {
    if (audioContext && gainNode) {
      const audio = audioRef.current;

      if (isPlaying) {
        audio.play();
        gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 2);
      } else {
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
        audio.pause();
      }
    }
  }, [isPlaying, src, audioContext, gainNode]);

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio controls loop ref={audioRef} src={src} />
      <button onClick={handlePlayButtonClick}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}

export default AudioPlayerTwo;
