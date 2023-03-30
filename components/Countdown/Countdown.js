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
    <div className="bg-sky-200 my-auto justify-center">
      <CountdownCircleTimer
        isPlaying
        duration={60 * 2}
        colors={["#A30000", "#F7B801", "#004777"]}
        colorsTime={[90, 60, 30]}
        reset
        isGrowing
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
    <div>
      {"Breath "}
      <CountdownCircleTimer
        isPlaying
        duration={60 * 3}
        colors={["#A30000", "#F7B801", "#004777"]}
        colorsTime={[90, 60, 30]}
        reset
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  </div>
);

export default UrgeWithPleasureComponent;
