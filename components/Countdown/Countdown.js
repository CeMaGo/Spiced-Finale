import { CountdownCircleTimer } from "react-countdown-circle-timer";

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    className="grid grid-flow-row"
    isPlaying
    duration={7}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default UrgeWithPleasureComponent;
