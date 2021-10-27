import React, { DetailedHTMLProps, HTMLAttributes, DragEvent } from "react";
import { v4 } from "uuid";

export const Droppable: React.FC<DroppablePropsType> = ({
  className,
  children,
  id,
}) => {
  const drop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    (e.target as HTMLDivElement).append(document.getElementById(data)!);
  };

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const finalClasses = `${className ? className : ""}`;
  return (
    <div id={id} onDrop={drop} onDragOver={allowDrop} className={finalClasses}>
      {children}
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
};
type DroppablePropsType = DefaultDivPropsType & PropsType;
