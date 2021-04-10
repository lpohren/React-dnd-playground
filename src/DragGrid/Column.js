import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
    margin: 4px;
    display: flex;
    flex-direction: column;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => props.isDraggingOver ? '#c2c2c1' : '#eeeeec'};
    flex-grow: 1;
    min-height: 100px;
    border-radius: 12px;
    display: flex;
    min-width: 300px;
    align-content: flex-start;
    flex-wrap: wrap;
`;

const Column = (props) => {
  return (
    <Container>
        <Droppable droppableId={props.column.id} direction='horizontal'>
            {(provided, snapshot) => (
                <TaskList
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                >
                    {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} activeType={props.activeType} setActiveType={props.setActiveType}/>)}
                    {provided.placeholder}
                </TaskList>
            )}
        </Droppable>
    </Container>
  )
}

export default Column;
