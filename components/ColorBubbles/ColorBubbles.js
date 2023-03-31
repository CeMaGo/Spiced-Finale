import React from "react";
import styles from "../../styles/Form.module.css";

function getRandomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

export default function ColorBubbles() {
  return (
    <>
      <div className={styles.bubble_wrap}>
        <div>
          <botton
            data-sound="/Aria.mp3"
            style={{ background: `${getRandomColor}` }}
            onClick={() => (!autoplay ? autoplay : console.log("not playing"))}
            src={"/Aria.mp3"}
            typeof="audio/mpeg"
          ></botton>
        </div>
        {/* //===========>>> onClick via handler function, check if button is checked? for playing src*/}
        <div>
          <button className={styles.button_bubble}>
            Bubble
            <audio controls className="transparent w-0">
              <source src={"/kerri__catalpa.mp3"} typeof="audio/mp3" />
            </audio>
          </button>
        </div>
        <div>
          <button style={{ background: `${getRandomColor}` }}>Bubble</button>
        </div>
        <div>
          <button style={{ background: `${getRandomColor}` }}>Bubble</button>
        </div>
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>{" "}
        <div>
          <button className={styles.button_bubble}>Bubble</button>
        </div>
      </div>
    </>
  );
}
