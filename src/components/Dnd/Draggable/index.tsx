import React, { DetailedHTMLProps, HTMLAttributes, DragEvent } from "react";

export const Draggable: React.FC<DraggablePropsType> = ({
  id,
  className,
  children,
}) => {
  const drag = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("transfer", (e.target as HTMLDivElement).id);
  };

  const notAllowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const finalClasses = `${className ? className : ""}`;
  return (
    <div
      id={id}
      className={finalClasses}
      draggable
      onDragStart={drag}
      onDragOver={notAllowDrop}
    >
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
type DraggablePropsType = DefaultDivPropsType & PropsType;
