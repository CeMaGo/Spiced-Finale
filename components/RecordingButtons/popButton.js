// / import { useState } from "react";

// function RecordingButton() {
//   const [recording, setRecording] = useState(false);
//   const [chunks, setChunks] = useState([]);

//   const startRecording = () => {
//     setRecording(true);

//     const mediaStream = navigator.mediaDevices.getUserMedia({ audio: true });
//     const mediaRecorder = new MediaRecorder(mediaStream);

//     mediaRecorder.addEventListener("data available", (event) => {
//       setChunks([...chunks, event.data]);
//     });

//     mediaRecorder.addEventListener("stop", () => {
//       const mixedBlob = new Blob(chunks, { type: "audio/mp3" });
//       const mixedUrl = URL.createObjectURL(mixedBlob);

//       // Do something with the mixed recording URL (e.g. save to database or download)
//     });

//     mediaRecorder.start();
//     setTimeout(() => mediaRecorder.stop(), 10000); // Stop recording after 10 seconds
//   };

//   return (
//     <button onClick={startRecording}>
//       {recording ? "Recording..." : "Record and Download"}
//     </button>
//   );
// }
// export default RecordingButton;
