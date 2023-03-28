import React from "react";
import { useRouter } from "next/router";
import { BiWater } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
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
      Koshi
      <br />
      {/* <AudioPlayer src="../public/Sounds/Koshi/Aria.mp3" /> */}
      <div>
        <div className="grid">
          <GiEarthAmerica className=" mx-3 h-10 w-10 align-center justify-center text-amber-600 shadow rounded-full" />
          <audio controls title="🌎" className="mx-2 shadow-lg rounded-full">
            <source src={"/Terra2.mp3"} typeof="audio/mpeg" />
          </audio>
        </div>
        <br />
        <div>
          <BiWater className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            title="💧Water"
            controls
            tabindex="0"
            className="mx-2 shadow-lg rounded-full"
          >
            <source src={"/Auqua.mp3"} type="audio/mpeg" />
          </audio>
        </div>
        <br />
        <BsFire className=" mx-3 h-10 w-10 align-center justify-center text-red-400 shadow rounded-full" />
        <audio controls className="mx-2 shadow-lg rounded-full">
          <source src={"/Ignis.mp3"} type="audio/mpeg" />
        </audio>
        <br />
      </div>
      <MdOutlineAir className=" mx-3 h-10 w-10 align-center justify-center text-pink-200 shadow rounded-full" />
      <audio
        src={"/Aria.mp3"}
        controls
        type="audio/mpeg"
        className="mx-2 shadow-lg rounded-full"
      />
    </div>
  );
}

export default Player;
