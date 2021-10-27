import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Draggable } from "../Dnd/Draggable/Draggable";
import styles from "./Letters.module.css";

export const Letter: React.FC<LetterPropsType> = ({
  className,
  id,
  content,
}) => {
  const finalClasses = `${className ? className : ""}`;
  return (
    <Draggable id={id} className={styles.dragabble}>
      <div className={finalClasses}>{content}</div>
    </Draggable>
  );
};

// Types
type DefaultDivPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLInputElement
>;
type PropsType = {
  id: string;
  content: string;
};
type LetterPropsType = DefaultDivPropsType & PropsType;
