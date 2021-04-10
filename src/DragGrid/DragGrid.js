import { useState } from 'react';
import initialData from './initial-data';
import Column from './Column';
import { DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-rows: 3fr 5fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

function DragGrid() {
  const [dataState, setDataState] = useState(initialData)
  const [overType, setoverType] = useState()

  const onDragEnd = result => {
    const { destination, source, draggableId}  = result;

    if (!destination) {
      return
    }

    if (
      destination.draggableID === source.droppableId &&
      destination.index === source.index
    ){
      return
    }

    const start = dataState.columns[source.droppableId];
    const finish = dataState.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.tasksIds)
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        tasksIds: newTaskIds,
      }

      const newState = {
        ...dataState,
        columns: {
          ...dataState.columns,
          [newColumn.id]: newColumn,
        }
      }

      setDataState(newState);
      return;
    }

    const startTaskIds = Array.from(start.tasksIds);
    const finishTaskIds = Array.from(finish.tasksIds);
    startTaskIds.splice(source.index, 1);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...start,
      tasksIds: startTaskIds,
    }

    const newFinishColumn = {
      ...finish,
      tasksIds: finishTaskIds,
    }


    const newState = {
      ...dataState,
      columns: {
        ...dataState.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      }
    }

    setDataState(newState);
  }

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
      {
        dataState.columnOrder.map((columnId) => {
          const column = dataState.columns[columnId];
          const tasks = column.tasksIds.map(taskId => dataState.tasks[taskId])
          return (
            <Column key={columnId} tasks={tasks} column={column} activeType={overType} setActiveType={setoverType}>{column.title}</Column>
          )
        })
      }
      </DragDropContext>
    </Container>
    
  )
}

export default DragGrid;
