import { BulkOperationBase } from "mongodb";
import { redirect } from "next/dist/server/api-utils";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={120}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);
export default UrgeWithPleasureComponent;

//==================>>>>>***<<<<<====================\\

//breath in/out counter
// prev set timer 2min, 5min, 10min
//custom timer
//transition:transorm audio drop don on focus?
// random math pick an audio and hid it with z-index behind button, on click bring it to the forground nd play
//button recieve ausio file,
// button on click play audio
// recording button? advanced https://www.npmjs.com/package/react-media-recorder
// col-span-0-9 grid layout in css

//random color bubbles

// fix the timer
//hide the controls, get them on mouse over
//fix the grid and style
// mini animations
