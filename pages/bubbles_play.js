import React from "react";
import Bubbles from "@/components/MusicBubbles/MusicBubbles";
function Bubbles_play() {
  return (
    <div className="m-1 py-2.5">
      <Bubbles className="overflow-hidden" />
      <br />
      <Tracks />
    </div>
  );
}

export default Bubbles_play;
