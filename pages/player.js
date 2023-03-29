import React from "react";
import { useRouter } from "next/router";
import { BiWater } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { GiEarthAmerica, GiFeather, GiBanjo } from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
import { WiNightAltRainMix } from "react-icons/wi";
import { GiWaveSurfer } from "react-icons/gi";
import { HiOutlineBell } from "react-icons/hi";
import { TbBellFilled } from "react-icons/tb";
import { AudioPlayer } from "@/components/Audioplayer/AudioPlayer";
import MusicBubbles from "@/components/MusicBubbles/MusicBubbles";
import RecordingButton from "../components/RecordingButtons/RecordingButton";
import ReactAudioPlayer from "react-audio-player";

// import Koshi from "/public/Sounds";
// function getAudioPath() {
//   const router = useRouter();
//   const { basePath } = router;
//   return `${basePath}/public/Sounds/Koshi/Aria.mp3`;
// }

function Player() {
  return (
    <div>
      {/* <RecordingButton /> */}
      <MusicBubbles />
      <div>
        <WiNightAltRainMix className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
        <audio
          loop
          title="Rain"
          controls
          tabindex="0"
          className="mx-2 shadow-lg rounded-full rose-500"
        >
          <source src={"/rain.mp3"} type="audio/mpeg" />
        </audio>
      </div>
      <div>
        <GiWaveSurfer className=" mx-3 h-10 w-10 align-center justify-center text-teal-300 shadow rounded-full" />
        <audio
          loop
          title="Rain"
          controls
          tabindex="0"
          className="mx-2 shadow-lg rounded-full"
        >
          <source src={"/beach.mp3"} type="audio/mpeg" />
        </audio>
      </div>
      <div>
        Koshi
        <div className="grid">
          <GiEarthAmerica className=" mx-3 h-10 w-10 align-center justify-center text-green-600 shadow rounded-full" />
          <audio
            loop
            preload
            controls
            title="🌎"
            className="mx-2 shadow-lg rounded-full"
          >
            <source src={"/Terra2.mp3"} typeof="audio/mpeg" />
          </audio>
        </div>
        <br />
        <div>
          <BiWater className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
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
      </div>
      <br />
      <MdOutlineAir className=" mx-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
      <audio
        preload
        src={"/Aria.mp3"}
        controls
        loop
        type="audio/mpeg"
        className="mx-2 shadow-lg rounded-full"
      />{" "}
      <HiOutlineBell className=" mx-3 h-10 w-10 align-center justify-center text-amber-300 shadow rounded-full" />
      <audio
        preload
        src={"/bell-meditation_cleanedwav.mp3"}
        controls
        loop
        type="audio/mpeg"
        className="mx-2 shadow-lg rounded-full"
      />
      <TbBellFilled className=" mx-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
      <audio
        preload
        src={"/bell-meditation-75335.mp3"}
        controls
        // loop
        type="audio/mpeg"
        className="mx-2 shadow-lg rounded-full"
      />{" "}
      <GiFeather className=" mx-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
      <audio
        fade
        volume
        preload
        src={"/kerri__eagle_feather.mp3"}
        controls
        loop
        type="audio/mpeg"
        className="mx-2 shadow-lg rounded-full"
      />
      <GiBanjo className="mx-3 h-10 w-10 align-center justify-center text-amber-800 shadow rounded-full"></GiBanjo>
      <ReactAudioPlayer preload="auto" controls volume loop>
        <source
          src={"gregorquendel__oriental-garden-intro.wav"}
          typeof="audio/wav"
          className="mx-2 shadow-lg rounded-full"
        ></source>
      </ReactAudioPlayer>
    </div>
  );
}

export default Player;

// const context = new AudioContext();

// const tracks = [
//   { url: "/audio/rain.mp3", volume: 0.5 },
//   { url: "/audio/windchimes.mp3", volume: 0.8 },
//   { url: "/audio/singingbowl.mp3", volume: 1.0 },
// ];

// const buffers = [];

// Promise.all(
//   tracks.map((track) =>
//     fetch(track.url)
//       .then((response) => response.arrayBuffer())
//       .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
//       .then((decodedBuffer) => buffers.push(decodedBuffer))
//   )
// ).then(() => {
//   const sources = buffers.map((buffer, index) => {
//     const source = context.createBufferSource();
//     source.buffer = buffer;
//     source.connect(context.destination);
//     source.start(0);
//     source.volume = tracks[index].volume;
//     return source;
//   });
// });

// const mediaRecorder = new MediaRecorder(context.destination.stream());

// const chunks = [];

// mediaRecorder.addEventListener("dataavailable", (event) => {
//   chunks.push(event.data);
// });

// mediaRecorder.addEventListener("stop", () => {
//   const blob = new Blob(chunks, { type: "audio/wav" });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = "mix.wav";
//   link.click();
// });

// mediaRecorder.start();

// setTimeout(() => {
//   mediaRecorder.stop();
// }, 60000); // Stop recording after 60 seconds
