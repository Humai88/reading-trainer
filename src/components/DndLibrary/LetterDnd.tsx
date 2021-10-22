import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useDrag } from "react-dnd";

export const Letter: React.FC<LetterPropsType> = ({
  className,
  id,
  content,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const finalClasses = `${className ? className : ""}`;
  return (
    <div
      ref={drag}
      id={id}
      className={finalClasses}
      style={{ border: isDragging ? "3px solid red" : "0px" }}
    >
      {content}
    </div>
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
