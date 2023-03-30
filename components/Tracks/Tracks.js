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

function Tracks() {
  return (
    <div>
      <section className="Music_Snippets">
        <div>
          <WiNightAltRainMix className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
            src={"/rain.mp3"}
            type={"audio/mpeg"}
          ></audio>
        </div>
        <br />
        <div>
          <GiWaveSurfer className=" mx-3 h-10 w-10 align-center justify-center text-teal-300 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/beach.mp3"}
            type={"audio/mpeg"}
          ></audio>
        </div>
        <br />
        <div>
          <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-green-600 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/Terra2.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>
        <br />
        <div>
          <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/Auqua.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>
        <br />
        <div>
          <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-red-400 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/Ignis.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>
        <br />
        <div>
          <GiWindchimes className=" mx-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/Aria.mp3"}
            typeof={"audio / mpeg"}
          ></audio>
        </div>
        <br />

        <div>
          <HiOutlineBell className=" mx-3 h-10 w-10 align-center justify-center text-amber-300 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/bell-meditation_cleanedwav.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>
        <br />

        <div>
          <TbBellFilled className=" mx-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/bell-meditation-75335.mp3"}
            typeof={"audio/mpeg"}
          ></audio>
        </div>
        <br />
        <div>
          <GiFeather className=" mx-3 h-10 w-10 align-center justify-center text-amber-200 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/kerri__eagle_feather.mp3"}
            type={"audio/mpeg"}
          ></audio>
        </div>
        <br />

        <div>
          <GiBanjo className="mx-3 h-10 w-10 align-center justify-center text-amber-800 shadow rounded-full"></GiBanjo>
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"gregorquendel__oriental-garden-intro.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
        <br />

        <div>
          <GiMagicLamp className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow bg-slate-500 rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
            src={"/sufi-dance.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
        <br />
        <div>
          <GiMagicSwirl className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
            src={"/soundbox.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
        <br />

        <div>
          <GiMagicGate className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
            src={"/soundbed.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
        <br />

        <div>
          <GiWhirlwind className=" mx-3 h-10 w-10 align-center justify-center text-slate-400 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/sand-and-wind-oriental-atmo.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
        <br />
        <div>
          <GiPsychicWaves className=" mx-3 h-10 w-10 align-center justify-center text-sky-500 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
            src={"/quartz-crystal-singing-bowl.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
        <br />
        <div>
          <GiMusicalNotes className=" mx-3 h-10 w-10 align-center justify-center text-slate-600 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
            src={"/oriental-mandolin.wav"}
            type="audio/wav"
          ></audio>
        </div>
        <br />
        <div>
          <GiNunFace className=" mx-3 h-10 w-10 align-center justify-center text-sky-600  bg-rose-200 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full"
            src={"/nuns-of-bhutan.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
        <br />
        <div>
          <GiCamelHead className=" mx-3 h-10 w-10 align-center justify-center text-amber-600 bg-yellow-100 shadow rounded-full" />
          <audio
            loop
            controls
            volume
            className="mx-2 shadow-lg rounded-full rose-500"
            src={"/moonheart__world-melody.wav"}
            typeof={"audio/wav"}
          ></audio>
        </div>
      </section>
    </div>
  );
}
export default Tracks;
