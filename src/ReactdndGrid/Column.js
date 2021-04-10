import { useContext } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { CardContext } from "./ReactdndGrid";
import Task from "./Task";

const Container = styled.div`
  margin: 4px;
  display: flex;
  flex-direction: column;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isOver ? "#c2c2c1" : "#eeeeec")};
  flex-grow: 1;
  min-height: 100px;
  border-radius: 12px;
  display: flex;
  min-width: 300px;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const Column = (props) => {
  const { onDragEnd } = useContext(CardContext);

  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item, monitor) =>
      onDragEnd({
        destinationID: "qwe",
        source: "qwe",
        index: item,
        draggableId: "qwe",
      }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Container>
      <TaskList ref={drop} isOver={isOver}>
        {props.tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            index={index}
            activeType={props.activeType}
            setActiveType={props.setActiveType}
          />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;
