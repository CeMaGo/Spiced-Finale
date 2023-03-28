import React from "react";
import { useRouter } from "next/router";
import { BiWater } from "react-icons/bi";
import { AudioPlayer } from "@/components/AudioPlayer";
import MusicBubbles from "@/components/MusicBubbles/MusicBubbles";
import ReactAudioPlayer from "react-audio-player";

// import Koshi from "/public/Sounds";
function getAudioPath() {
  const router = useRouter();
  const { basePath } = router;
  return `${basePath}/public/Sounds/Koshi/Aria.mp3`;
}

function Player() {
  return (
    <div>
      <MusicBubbles />
      <br />
      {/* <AudioPlayer src="../public/Sounds/Koshi/Aria.mp3" /> */}
      <div
      // onClick={() => {
      //   console.log("koshi clicked"), source.play();
      // }}
      >
        Play koshi
        <title>🌎</title>
        <audio controls src={"/Terra2.mp3"} title="🌎"></audio>
        <br />
        <div>
          <audio title="💧Water" controls tabindex="0">
            <source src={"/Auqua.mp3"} type="audio/mpeg" />
          </audio>
        </div>
        <br />
        <audio autoPlay controls="controls">
          <source src={"/Ignis.mp3"} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
      <ReactAudioPlayer src={"/Aria.mp3"} autoPlay controls type="audio/mpeg" />
    </div>
  );
}

export default Player;
