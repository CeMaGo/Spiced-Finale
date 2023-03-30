import React from "react";
import { AudioPlayer } from "@/components/Audioplayer/AudioPlayer";
import MusicBubbles from "@/components/MusicBubbles/MusicBubbles";
import useSound from "use-sound";
// import Koshi from "/public/Sounds";

function Bubbles() {
  return (
    <div>
      <MusicBubbles className="overflow-hidden" />
      <br />
    </div>
  );
}

export default Bubbles;
