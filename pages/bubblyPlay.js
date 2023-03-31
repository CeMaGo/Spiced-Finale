import React from "react";
import Bubbles from "@/components/MusicBubbles/MusicBubbles";
import Tracks from "@/components/Tracks/Tracks";
import UrgeWithPleasureComponent from "@/components/Countdown/Countdown";
import ColorBubbles from "@/components/ColorBubbles/ColorBubbles";

function Bubbles_play() {
  return (
    <div className="m-1 py-2.5">
      <Bubbles className="overflow-hidden" />
      <br />
      <ColorBubbles />
      <UrgeWithPleasureComponent
        className="autofocus justify-center align-middle
      "
      />
      <Tracks />
    </div>
  );
}

export default Bubbles_play;
