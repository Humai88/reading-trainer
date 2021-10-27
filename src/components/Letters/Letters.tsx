import React, { ChangeEvent, useState } from "react";
import { Droppable } from "../Dnd/Droppable/Droppable";
import {
  marksCells,
  cells,
  vowelsCells,
  consonantsCells,
  CellsType,
} from "../../data/data";
import styles from "./Letters.module.css";
import { Letter } from "./Letter";
import { Canvas } from "../Drawing/Drawing";
import { v4 } from "uuid";
export const Letters: React.FC<PtopsType> = ({ paintMode }) => {
  const letters = [...vowelsCells, ...consonantsCells, ...marksCells];
  const [data, setData] = useState<CellsType[]>(letters);
  const [newLetter, setNewLetter] = useState("");
  const addNewLetter = () => {
    if (newLetter.length == 0) {
      return;
    }
    const newCell = { id: v4(), content: newLetter.toUpperCase() };
    data.push(newCell);
    setData(data);
    setNewLetter("");
  };

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
            <div id={c.id} key={c.id} className={styles.itemCell}>
              {c.content}
            </div>
          ))}
        </div>
      </Droppable>
      <Droppable id="dr2" className={styles.droppableLetters}>
        {data.map((v) => (
          <Letter
            content={v.content}
            key={v.id}
            className={
              styles.item +
              " " +
              (v.content === "А" ||
              v.content === "Е" ||
              v.content === "Ё" ||
              v.content === "И" ||
              v.content === "О" ||
              v.content === "У" ||
              v.content === "Ы" ||
              v.content === "Э" ||
              v.content === "Ю" ||
              v.content === "Я"
                ? styles.vowels
                : v.content === "Ъ" || v.content === "Ь"
                ? styles.marks
                : styles.consonants)
            }
            id={v.id}
          />
        ))}
      </Droppable>
      <input
        type="text"
        autoFocus
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.currentTarget.value.length <= 1) {
            setNewLetter(e.currentTarget.value);
          } else {
            return;
          }
        }}
        value={newLetter}
      />
      <button onClick={addNewLetter}>Добавить букву</button>
    </div>
  );
};

// Types
interface PtopsType {
  paintMode: boolean;
}
