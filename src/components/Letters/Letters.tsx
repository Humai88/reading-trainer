import React from "react";
import { Droppable } from "../Dnd/Droppable/index";

import {
  marksCells,
  cells,
  vowelsCells,
  consonantsCells,
} from "../../data/data";
import styles from "./Letters.module.css";
import { Letter } from "./Letter";
import { Canvas } from "../Drawing/Drawing";

export const Letters: React.FC<PtopsType> = ({ paintMode }) => {
  return (
    <div className={styles.wrapper}>
      <Droppable id="dr1" className={styles.droppable}>
        {paintMode && (
          <div className={styles.canvas}>
            <Canvas />
          </div>
        )}
        <div className={styles.cellsWrapper}>
          {cells.map((c) => (
            <div key={c.id} className={styles.itemCell}>
              {c.content}
            </div>
          ))}
        </div>
      </Droppable>
      <Droppable id="dr2" className={styles.droppableLetters}>
        {vowelsCells.map((v) => (
          <Letter
            content={v.content}
            key={v.id}
            className={`${styles.item} ${styles.vowels}`}
            id={v.id}
          />
        ))}
        {consonantsCells.map((c) => (
          <Letter
            content={c.content}
            key={c.id}
            className={`${styles.item} ${styles.consonants}`}
            id={c.id}
          />
        ))}
        {marksCells.map((m) => (
          <Letter
            content={m.content}
            key={m.id}
            className={`${styles.item} ${styles.marks}`}
            id={m.id}
          />
        ))}
      </Droppable>
    </div>
  );
};

// Types
interface PtopsType {
  paintMode: boolean;
}
