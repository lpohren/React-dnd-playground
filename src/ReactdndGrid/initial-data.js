const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Run a marathon', type: 'EXERCISE'},
        'task-2': { id: 'task-2', content: 'Gym work out', type: 'EXERCISE'},
        'task-3': { id: 'task-3', content: 'Do yoga', type: 'EXERCISE'},
        'task-4': { id: 'task-4', content: 'Do calistenics', type: 'EXERCISE'},
        'task-5': { id: 'task-5', content: 'Eat a carrot', type: 'EAT'},
        'task-6': { id: 'task-6', content: 'Eat an orange', type: 'EAT'},
        'task-7': { id: 'task-7', content: 'Eat a potato', type: 'EAT'},
        'task-8': { id: 'task-8', content: 'Play with dog', type: 'PLAY'},
        'task-9': { id: 'task-9', content: 'Play Soccer', type: 'PLAY'},
        'task-10': { id: 'task-10', content: 'Play videogame', type: 'PLAY'},
        'task-11': { id: 'task-11', content: 'Play board game', type: 'PLAY'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            tasksIds: ['task-1', 'task-3', 'task-7', 'task-8', 'task-4', 'task-10', 'task-11', 'task-9']
        },
        'column-2': {
            id: 'column-2',
            tasksIds: []
        },
        'column-3': {
            id: 'column-3',
            tasksIds: []
        },
        'column-4': {
            id: 'column-4',
            tasksIds: []
        },
        'column-5': {
            id: 'column-5',
            tasksIds: []
        },
        'column-6': {
            id: 'column-6',
            tasksIds: ['task-2']
        },
        'column-7': {
            id: 'column-7',
            tasksIds: ['task-5']
        },
        'column-8': {
            id: 'column-8',
            tasksIds: ['task-6']
        },
        'column-9': {
            id: 'column-9',
            tasksIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7', 'column-8', 'column-9']
};

export default initialData;