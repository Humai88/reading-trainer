import React from "react";
import { Droppable } from "../Dnd/Droppable/index";
import { Draggable } from "../Dnd/Draggable";
import { marks, cells, vowels, consonants } from "../../data/data";
import styles from "./Letters.module.css";

export const Letters = () => {
  return (
    <div className={styles.wrapper}>
      <Droppable id="dr2">
        <div className={styles.cellsWrapper}>
          {cells.map((l, i) => (
            <div key={i} className={styles.itemCell}>
              {l}
            </div>
          ))}
        </div>
      </Droppable>
      <Droppable id="dr1" className={styles.droppableLetters}>
        {vowels.map((l, i) => (
          <Draggable key={i} className={styles.dragabble} id={l}>
            <div className={`${styles.item} ${styles.vowels}`}>{l}</div>
          </Draggable>
        ))}
        {consonants.map((l, i) => (
          <Draggable key={i} className={styles.dragabble} id={l}>
            <div className={`${styles.item} ${styles.consonants}`}>{l}</div>
          </Draggable>
        ))}
        {marks.map((l, i) => (
          <Draggable key={i} className={styles.dragabble} id={l}>
            <div className={`${styles.item} ${styles.marks}`}>{l}</div>
          </Draggable>
        ))}
      </Droppable>
    </div>
  );
};
