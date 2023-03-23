import React from "react";
import { BsForwardFill, BsGooglePlay } from "react-icons/bs";

import { HiArrowSmLeft } from "react-icons/hi";
import { GiPauseButton } from "react-icons/gi";
import Styles from "../styles/AudioPlayer.module.css";

const AudioPlayer = () => {
  return (
    <div className="audioPlayer">
      <h4 className="text-3xl text-slate-600"> Audio Player</h4>

      <button>
        <BsForwardFill />
        30
      </button>
      <button>
        <BsGooglePlay />
        /<GiPauseButton />
      </button>
      <button>
        <HiArrowSmLeft /> 30
      </button>
      {/* current time */}
      <div>0:00</div>

      {/* timestemp? slider */}
      <div>
        <input type="range" />
      </div>

      {/* duration of track */}
      <div>2:59</div>
    </div>
  );
};

export { AudioPlayer };
