import { getActiveElement } from "formik";
import React from "react";
import styles from "../../styles/Form.module.css";

export default function MusicBubbles() {
  return (
    <>
      <div className={styles.bubble_wrap}>
        <div>
          <button data-sound="/Aria.mp3" className={styles.button_bubble}>
            <audio src={"/Aria.mp3"} typeof="audio/mpeg" />
            Bubble
          </button>
        </div>
        {/* //===========>>> onClick activate the loop? via handler function, check if button is checked? */}
        <div>
          <button className={styles.button_bubble}>
            Bubble
            <audio controls className="transparent w-0">
              s "
              <source src={"/kerri__catalpa.mp3"} typeof="audio/mp3" />
            </audio>
          </button>
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
