// import { LetterBox } from "./components/LetterBox";
// import { letters } from "./data/data";
// import board from "./assets/images/32521.png";
// import { DragDropContext } from "react-beautiful-dnd";
// import { Droppable } from "react-beautiful-dnd";
// import { Draggable } from "react-beautiful-dnd";
// import { useCallback, useState } from "react";
// import "./App.css";

function AppbeautifulDnD() {
  // const [characters, updateCharacters] = useState(letters);
  // const onDragEnd = useCallback((result) => {
  //   if (!result.destination) {
  //     return;
  //   }
  //   const items = characters;
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   updateCharacters(items);
  // }, []);
  return (
    // <main>
    {
      /* <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="lettersList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="letters-container"
            >
              <div className="board">
                <img className="board-img" src={board} alt="board" />
              </div>
              <div className="letters-wrapper">
                {characters.map((l, i) => {
                  return (
                    <Draggable key={l} draggableId={l} index={i}>
                      {(provided) => (
                        <div
                          className="letter-box"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <span className="item">{l}</span>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main> */
    }
  );
}

export default AppbeautifulDnD;
