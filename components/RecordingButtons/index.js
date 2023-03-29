import React from "react";

function RecordingButton() {
  function startRecording() {
    const context = new AudioContext();

    const tracks = [
      { url: "/audio/rain.mp3", volume: 0.5 },
      { url: "/audio/windchimes.mp3", volume: 0.8 },
      { url: "/audio/singingbowl.mp3", volume: 1.0 },
    ];

    const buffers = [];

    Promise.all(
      tracks.map((track) =>
        fetch(track.url)
          .then((response) => response.arrayBuffer())
          .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
          .then((decodedBuffer) => buffers.push(decodedBuffer))
      )
    ).then(() => {
      const sources = buffers.map((buffer, index) => {
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(0);
        source.volume = tracks[index].volume;
        return source;
      });

      const mediaRecorder = new MediaRecorder(context.destination.stream());

      const chunks = [];

      mediaRecorder.addEventListener("dataavailable", (event) => {
        chunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "mix.wav";
        link.click();
      });

      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
      }, 60000); // Stop recording after 60 seconds
    });
  }

  return <button onClick={startRecording}>Record and Download</button>;
}

export default RecordingButton;
