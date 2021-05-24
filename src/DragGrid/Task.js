import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    margin: 2px;
    padding: 8px;
    
    width: 80px;
    height: 40px;
    background-color: ${(props) => props.isDragging ? 'lightgreen' : '#555278'};
    color: white;
    font-size: 12px;
    //border-right: 6px solid black;
    border-right: 6px solid ${(props) => borderColor(props)};
    border-radius: 6px;
`;

const borderColor = (props) => {
    if (props.task.type === props.activeType){
        return '#37c22b'
    }
    return 'black'
}

// This is a bug fix, since the app does not support horizontal and vertical drag and drop, this code IS IMPORTANT and disables the cards reordering
const getStyle = (style, snapshot) => {
    if (!snapshot.isDragging) return {};
    if (!snapshot.isDropAnimating) {
      return style;
    }
  
    return {
      ...style,
      // cannot be 0, but make it super tiny
      transitionDuration: `0.001s`
    };
}

const Task = (props) => {

    const onMouseEnterHandler = (type) => {
        props.setActiveType(type)
    }
    const onMouseLeaveHandle = (type) => {
        props.setActiveType()
    }

    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getStyle(provided.draggableProps.style, snapshot)}
                isDragging={snapshot.isDragging}
                task={props.task}
                activeType={props.activeType}
                onMouseEnter={() => onMouseEnterHandler(props.task.type)}
                onMouseLeave={() => onMouseLeaveHandle(props.task.type)}
                >
                    {props.task.content}
                </Container>
            )}
        </Draggable>
    )
}

export default Task;