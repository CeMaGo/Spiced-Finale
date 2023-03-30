import ColorSquare from "@/components/ColorSquare";
import ColorBubbles from "@/components/ColorBubbles/ColorBubbles";
import React from "react";
import Meditation from "../components/Meditation/Meditation";
import UrgeWithPleasureComponent from "./countdown";

function meditation() {
  return (
    <div>
      <Meditation />
      <UrgeWithPleasureComponent />
      <ColorSquare />
    </div>
  );
}

export default meditation;
