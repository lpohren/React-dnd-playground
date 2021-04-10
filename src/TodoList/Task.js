import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgrey;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 2px;
    background-color: ${(props) => props.isDragging ? 'lightgreen' : 'white'}
`;

const Task = (props) => {

    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                isOver={snapshot.draggingOver}
                >
                    {props.task.content}
                </Container>
            )}
            
        </Draggable>
    )
}

export default Task;