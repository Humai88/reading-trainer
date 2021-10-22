import React, { useState } from "react";
import { useDrop } from "react-dnd";
import {
  marksCells,
  cells,
  vowelsCells,
  consonantsCells,
  CellsType,
} from "../../data/data";

import styles from "./Letters.module.css";
import { Letter } from "../Letters/Letter";

export const LettersDnD = () => {
  const [board, setBoard] = useState<CellsType[]>(cells);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item: ItemType) => addLetterToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addLetterToBoard = (id: string) => {
    const letterList = [
      ...consonantsCells,
      ...vowelsCells,
      ...marksCells,
    ].filter((l) => l.id === id);

    setBoard((board) => [...board, letterList[0]]);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.cellsWrapper} ref={drop}>
        {board.map((p) => (
          <div key={p.id} className={styles.itemCell}>
            {p.content}
          </div>
        ))}
      </div>
      <div className={styles.droppableLetters}>
        {vowelsCells.map((w) => (
          <Letter
            key={w.id}
            className={`${styles.item} ${styles.vowels}`}
            content={w.content}
            id={w.id}
          ></Letter>
        ))}
        {consonantsCells.map((c) => (
          <Letter
            key={c.id}
            className={`${styles.item} ${styles.consonants}`}
            content={c.content}
            id={c.id}
          >
            {c.content}
          </Letter>
        ))}
        {marksCells.map((m) => (
          <Letter
            key={m.id}
            className={`${styles.item} ${styles.marks}`}
            content={m.content}
            id={m.id}
          >
            {m.content}
          </Letter>
        ))}
      </div>
    </div>
  );
};

// Types
type ItemType = {
  id: string;
};
