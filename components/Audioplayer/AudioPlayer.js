import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { useState } from "react";
import { HiPlay } from "react-icons/hi";
// import { styles } from "../styles/AudioPlayer.module.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pause, setPause] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex-column m-auto text-3xl text-slate-600">
      <h4 className=" text-slate-600"> Audio Player</h4>

      <button className="">
        <FaArrowLeft />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <GiPauseButton /> : <HiPlay />}
      </button>
      <button>
        <FaArrowRight />
      </button>
      <div>0:00</div>

      {/* timestemp? slider */}
      <div>
        <input
          type="range"
          className="gradient-from-lr from-cyan-700 to-slate-800"
        />
      </div>
      <div>2:59</div>
    </div>
  );
};

export { AudioPlayer };
