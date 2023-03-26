import React from "react";
import { Aria } from "../../assets/Koshi/Aria.mp3";

export default function KoshiButton() {
  function play() {
    console.log("playing ");
  }
  return (
    // <div className="w-full bg-gradient-to-tr from-rose-500 to bg-rose-800 rounded-md">
    //   <div id="AriaSound" onClick={handlePlaySound}>
    //     <audio src="../../assets/Koshi/Aria.mp3">Koshi Aria</audio>
    //   </div>
    // </div>
    <div>
      <button onClick={play}>
        Click
        <audio id="a1">
          <source src="../../assets/Koshi/Aria.mp3" type="audio/mpeg" />
          aria Koshi
        </audio>
      </button>
    </div>
  );
}
