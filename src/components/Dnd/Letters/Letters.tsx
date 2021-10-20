import React from "react";
import { Droppable } from "../Droppable/index";
import { Draggable } from "../Draggable";
import "./../../../App.css";
import { letters } from "../../../data/data";
import styles from "./Letters.module.css";

export const Letters = () => {
  return (
    <div className={styles.wrapper}>
      <Droppable id="dr2" className={styles.droppable}></Droppable>
      <Droppable id="dr1" className={styles.droppableLetters}>
        {letters.map((l, i) => (
          <Draggable key={i} className={styles.dragabble} id={l}>
            <div className={styles.item}>{l}</div>
          </Draggable>
        ))}
      </Droppable>
    </div>
  );
};
