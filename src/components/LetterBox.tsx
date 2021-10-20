import React from "react";
import styles from "./LetterBox.module.css";
import { Draggable } from "react-beautiful-dnd";

export const LetterBox: React.FC<LetterBoxPropsType> = ({
  letter,
  letterId,
  index,
}) => {
  return (
    <Draggable draggableId={letterId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.letterBox}
        >
          <span className={styles.item}>{letter}</span>
        </div>
      )}
    </Draggable>
  );
};

// Types
type LetterBoxPropsType = {
  letter: string;
  letterId: string;
  index: number;
};
