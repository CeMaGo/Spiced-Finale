import React from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import KoshiButton from "@/components/KoshiButton";

function Player() {
  return (
    <div>
      <KoshiButton />
      <br />
      <AudioPlayer />
    </div>
  );
}

export default Player;
