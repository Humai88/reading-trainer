import React, { useCallback } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./../App.css";

export const Main = () => {
  const onDragEnd = useCallback((result) => {
    if (!result.destination) {
      return;
    }
  }, []);
  return (
    <main>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="lettersList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="letters-container"
            >
              <div className="board"></div>
              <div className="letters-wrapper">
                {/* {characters.map((l, i) => {
                 return (
               
                 );
               })} */}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
};
