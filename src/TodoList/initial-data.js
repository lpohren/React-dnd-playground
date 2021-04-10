const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Meditate 1 hour'},
        'task-2': { id: 'task-2', content: 'Read the Vedas book'},
        'task-3': { id: 'task-3', content: 'Do yoga'},
        'task-4': { id: 'task-4', content: 'Do calistenics'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            tasksIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            tasksIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            tasksIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;