import React {useState} from "react";
import { BsGooglePlay } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiArrowSmLeft } from "react-icons/hi";
import { GiPauseButton } from "react-icons/gi";
import Styles from "../styles/AudioPlayer.module.css";
import { useState } from "react";

const AudioPlayer = () => {
  const [isPlaying,setIsPlaying] = useState(false)
  return (
    <div className="audioPlayer text-3xl text-slate-600">
      <h4 className="text-3xl text-slate-600"> Audio Player</h4>

      <button>
        <FaArrowLeft />
      </button>
      <button>
        <BsGooglePlay />
        /<GiPauseButton />
      </button>
      <button>
        <FaArrowRight />
      </button>
      {/* current time */}
      <div>0:00</div>

      {/* timestemp? slider */}
      <div>
        <input type="range" className="color-cyan-700" />
      </div>

      {/* duration of track */}
      <div>2:59</div>
    </div>
  );
};

export { AudioPlayer };
