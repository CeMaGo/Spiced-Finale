import React from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import MusicBubbles from "@/components/MusicBubbles/MusicBubbles";
import ReactAudioPlayer from "react-audio-player";

// import Koshi from "/public/Sounds";

function Player() {
  return (
    <div>
      <MusicBubbles />
      <br />
      {/* <AudioPlayer src="../public/Sounds/Koshi/Aria.mp3" /> */}
      <div
        onClick={() => {
          console.log("koshi clicked"), source.play();
        }}
      >
        Play koshi
        <audio controls src="../public/Sounds/Koshi/Aria.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <br />
        <audio
          controls
          src="../public/Sounds/Koshi/Auqua.mp3"
          typeof="audio/.mp3"
        >
          <source src="../public/Sounds/Koshi/Terra2.mp3" />
        </audio>
        <br />
        <audio
          autoPlay
          controls="controls"
          preload="../public/Sounds/Koshi/Ignis.mp3"
        >
          <source src="../public/Sounds/Koshi/Ignis.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
      <ReactAudioPlayer
        src="../public/Sounds/Koshi/Aria.mp3"
        autoPlay
        controls
      />
    </div>
  );
}

export default Player;
