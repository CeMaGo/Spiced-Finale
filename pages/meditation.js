import ColorSquare from "@/components/ColorSquare";
import Tracks from "@/components/Tracks/Tracks";
import React from "react";

function meditation() {
  return (
    <div className=" bg-scroll bg-slate-500 bg-gradient-to-br bg-opacity-5 grid grid-cols-2 gap-2">
      {/* <Meditation /> */}
      <Tracks />
      <ColorSquare />
    </div>
  );
}

export default meditation;
