import { createContext, useState } from "react";
import initialData from "./initial-data";
import Column from "./Column";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const CardContext = createContext({
  onDragEnd: null,
});

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-rows: 3fr 5fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

function ReactdndGrid() {
  const [dataState, setDataState] = useState(initialData);
  const [overType, setoverType] = useState();

  const onDragEnd = (result) => {
    const { destinationID, source, index, draggableId } = result;

    if (!destinationID) {
      return;
    }

    if (
      destinationID === source.droppableId
    ) {
      return;
    }

    const start = dataState.columns[source.droppableId];
    const finish = dataState.columns[destinationID];

    if (start === finish) {
      const newTaskIds = Array.from(start.tasksIds);
      newTaskIds.splice(index, 1);
      newTaskIds.push(draggableId);

      const newColumn = {
        ...start,
        tasksIds: newTaskIds,
      };

      const newState = {
        ...dataState,
        columns: {
          ...dataState.columns,
          [newColumn.id]: newColumn,
        },
      };

      setDataState(newState);
      return;
    }

    const startTaskIds = Array.from(start.tasksIds);
    const finishTaskIds = Array.from(finish.tasksIds);
    startTaskIds.splice(index, 1);
    finishTaskIds.push(draggableId);

    const newStartColumn = {
      ...start,
      tasksIds: startTaskIds,
    };

    const newFinishColumn = {
      ...finish,
      tasksIds: finishTaskIds,
    };

    const newState = {
      ...dataState,
      columns: {
        ...dataState.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    setDataState(newState);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <CardContext.Provider value={{ onDragEnd }}>
        <Container>
          {dataState.columnOrder.map((columnId) => {
            const column = dataState.columns[columnId];
            const tasks = column.tasksIds.map(
              (taskId) => dataState.tasks[taskId]
            );
            return (
              <Column
                key={columnId}
                tasks={tasks}
                column={column}
                activeType={overType}
                setActiveType={setoverType}
              >
                {column.title}
              </Column>
            );
          })}
        </Container>
      </CardContext.Provider>
    </DndProvider>
  );
}

export default ReactdndGrid;
