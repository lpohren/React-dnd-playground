import { useDrag } from "react-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin: 2px;
  padding: 8px;
  width: 80px;
  height: 40px;
  background-color: #555278;
  color: white;
  font-size: 12px;
  border-right: 6px solid ${(props) => borderColor(props)};
  border-radius: 6px;
  opacity: ${(props) => props.opacity};
`;

const borderColor = (props) => {
  if (props.task.type == props.activeType) {
    return "#37c22b";
  }
  return "black";
};

const Task = (props) => {

  const [{isDragging} , drag] = useDrag({
      type: 'CARD',
      item: {
        id: props.task.id,
      },
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      })
  })

  const onMouseEnterHandler = (type) => {
    props.setActiveType(type);
  };
  const onMouseLeaveHandle = (type) => {
    props.setActiveType();
  };

  return (
    <Container
      ref={drag}
      task={props.task}
      activeType={props.activeType}
      opacity={isDragging ? 0.5 : 1}
      onMouseEnter={() => onMouseEnterHandler(props.task.type)}
      onMouseLeave={() => onMouseLeaveHandle(props.task.type)}
    >
      {props.task.content}
    </Container>
  );
};

export default Task;
