import React from "react";
import { BiWater } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import {
  GiEarthAmerica,
  GiFeather,
  GiBanjo,
  GiMagicLamp,
  GiMagicSwirl,
  GiMagicGate,
  GiWhirlwind,
  GiWindchimes,
  GiPsychicWaves,
  GiMusicalNotes,
  GiCamelHead,
  GiNunFace,
  GiWaveSurfer,
} from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
import { WiNightAltRainMix } from "react-icons/wi";
import { HiOutlineBell } from "react-icons/hi";
import { TbBellFilled } from "react-icons/tb";
import MusicBubbles from "@/components/MusicBubbles/MusicBubbles";
import RecordingButton from "../components/RecordingButtons/RecordingButton";
import ReactAudioPlayer from "react-audio-player";

function Player() {
  return (
    <div>
      {/* <RecordingButton /> */}
      <MusicBubbles />
      <section className="Music_Snippets">
        {" "}
        <div>
          <WiNightAltRainMix className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
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
          <div className="grid">
            {/* <GiEarthAmerica /> */}
            <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-green-600 shadow rounded-full" />
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
            {/* <BiWater /> */}
            <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
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
          {/* <BsFire /> */}
          <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-red-400 shadow rounded-full" />
          <audio controls className="mx-2 shadow-lg rounded-full">
            <source src={"/Ignis.mp3"} type="audio/mpeg" />
          </audio>
        </div>
        <br />
        {/* <MdOutlineAir/> */}
        <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
        <audio
          preload
          src={"/Aria.mp3"}
          controls
          loop
          type="audio/mpeg"
          className="mx-2 shadow-lg rounded-full"
        />
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
        <ReactAudioPlayer
          preload="auto"
          controls
          volume
          loop
          className="mx-2 shadow-lg rounded-full"
        >
          <source
            src={"gregorquendel__oriental-garden-intro.wav"}
            typeof="audio/wav"
            className="mx-2 shadow-lg rounded-full"
          ></source>
        </ReactAudioPlayer>
        <br />
        <div>
          <GiMagicLamp className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow bg-slate-500 rounded-full" />
          <audio
            src={"/sufi-dance.wav"}
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
          >
            <source fade src={"/sufi-dance.wav"} type="audio/wav" />
          </audio>
        </div>
        <br />
        <div>
          <GiMagicSwirl className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
          >
            <source fade src={"/soundbox.wav"} type="audio/wav" />
          </audio>
        </div>
        <br />
        <div>
          <GiMagicGate className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
          >
            <source fade src={"/soundbed.wav"} type="audio/wav" />
          </audio>
        </div>
        <br />
        <div>
          <GiWhirlwind className=" mx-3 h-10 w-10 align-center justify-center text-slate-400 shadow rounded-full" />
          <audio loop controls volume className="mx-2 shadow-lg rounded-full">
            <source src={"/sand-and-wind-oriental-atmo.wav"} type="audio/wav" />
          </audio>
        </div>
        <br />
        <div>
          <GiPsychicWaves className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
          >
            <source
              fade
              src={"/quartz-crystal-singing-bowl.wav"}
              type="audio/wav"
            />
          </audio>
        </div>
        <div>
          <GiMusicalNotes className=" mx-3 h-10 w-10 align-center justify-center text-slate-600 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
          >
            <source fade src={"/oriental-mandolin.wav"} type="audio/wav" />
          </audio>
        </div>
        <div>
          <GiNunFace className=" mx-3 h-10 w-10 align-center justify-center text-sky-600  bg-rose-200 shadow rounded-full" />
          <audio loop controls volume className="mx-2 shadow-lg rounded-full">
            <source fade src={"/nuns-of-bhutan.wav"} type="audio/wav" />
          </audio>
        </div>
        <div>
          <GiCamelHead className=" mx-3 h-10 w-10 align-center justify-center text-amber-600 bg-yellow-100 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
          >
            <source
              fade
              src={"/moonheart__world-melody.wav"}
              type="audio/wav"
            />
          </audio>
        </div>
      </section>
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
