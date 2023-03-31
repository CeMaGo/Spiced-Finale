import React from "react";
import {
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
import { WiNightAltRainMix } from "react-icons/wi";
import { HiOutlineBell } from "react-icons/hi";
import { TbBellFilled } from "react-icons/tb";

function getRamboRainbowNumbers() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

function getRandomNumber() {
  return (((1 << 24) * Math.random()) | 0).toString(16);
}

function Tracks() {
  return (
    <div className=" grid-flow-col">
      <section
        className="grid xl:grid-cols-2 gap-6 align-middle
       "
      >
        <div className="w-125 h-36">
          <WiNightAltRainMix className=" m-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <div>
            <audio
              loop
              controls
              volume
              className="m-2 shadow rounded-full "
              src={"/rain.mp3"}
              type={"audio/mpeg"}
            ></audio>
          </div>
        </div>

        <div className="w-125 h-36 bg-amber-700">
          <GiWaveSurfer className=" m-3 h-10 w-10 align-center justify-center text-teal-300 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/beach.mp3"}
            type={"audio/mpeg"}
          ></audio>
        </div>

        <div className="w-125 h-36 bg-amber-200">
          <GiWindchimes className=" m-3 h-10 w-10 align-center justify-center text-green-600 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/Terra2.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiWindchimes className=" m-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/Auqua.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiWindchimes className=" m-3 h-10 w-10 align-center justify-center text-red-400 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/Ignis.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiWindchimes className=" m-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/Aria.mp3"}
            typeof={"audio / mpeg"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <HiOutlineBell className=" m-3 h-10 w-10 align-center justify-center text-amber-300 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/bell-meditation_cleanedwav.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <TbBellFilled className=" m-3 h-10 w-10 align-center justify-center text-orange-400 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/bell-meditation-75335.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiFeather className=" m-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/kerri__eagle_feather.mp3"}
            type={"audio/mpeg"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiBanjo className="m-3 h-10 w-10 align-center justify-center text-amber-800 shadow rounded-full"></GiBanjo>
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"gregorquendel__oriental-garden-intro.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiMagicLamp className=" m-3 h-10 w-10 align-center justify-center text-amber-400 shadow bg-stone-400 rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full rose-500"
            src={"/sufi-dance.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiMagicSwirl className=" m-3 h-10 w-10 align-center justify-center text-purple-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full rose-500"
            src={"/soundbox.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiMagicGate className=" m-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full rose-500"
            src={"/soundbed.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiWhirlwind className=" m-3 h-10 w-10 align-center justify-center text-slate-400 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/sand-and-wind-oriental-atmo.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiPsychicWaves className=" m-3 h-10 w-10 align-center justify-center text-fuchsia-600 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full rose-500"
            src={"/quartz-crystal-singing-bowl.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiMusicalNotes className=" m-3 h-10 w-10 align-center justify-center text-slate-600 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full rose-500"
            src={"/oriental-mandolin.wav"}
            type="audio/wav"
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiNunFace className=" m-3 h-10 w-10 align-center justify-center text-sky-600  bg-rose-200 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full"
            src={"/nuns-of-bhutan.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>

        <div
          className="w-125 h-36 "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <GiCamelHead className=" m-3 h-10 w-10 align-center justify-center text-amber-600 bg-yellow-100 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="m-2 shadow-lg rounded-full rose-500"
            src={"/moonheart__world-melody.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
      </section>
    </div>
  );
}
export default Tracks;
