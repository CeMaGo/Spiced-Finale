import ColorSquare from "@/components/ColorSquare";
import Tracks from "@/components/Tracks/Tracks";
import React from "react";
import Meditation from "../components/Meditation/Meditation";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function meditation() {
  return (
    <div className=" h-screen">
      <Meditation />
      <Tracks />
      <ColorSquare />
    </div>
  );
}

export default meditation;
