import { CountdownCircleTimer } from "react-countdown-circle-timer";

const UrgeWithPleasureComponent = () => (
  <div>
    {/* <CountdownCircleTimer
      className="grid grid-flow-row"
      isPlaying
      duration={7}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      isGrowing={true}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer> */}
    <div className="  bg-opacity-95 rounded bg-sky-200 my-auto p-10 justify-center align-middle">
      <CountdownCircleTimer
        isPlaying
        duration={60 * 2}
        colors={["#004777", "##A30000", "#F7B801"]}
        colorsTime={[90, 60, 30]}
        reset
        isGrowing
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
    <div className=" h-40"></div>
    <div className="bg-opacity-75 rounded p-10 flex align-middle justify-center bg-slate-500">
      <CountdownCircleTimer
        isPlaying
        duration={60 * 5}
        colors={["#A30000", "#F7B801", "#004777"]}
        colorsTime={[90, 60, 30]}
        reset
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
    <div className="h-20"></div>
  </div>
);

export default UrgeWithPleasureComponent;
