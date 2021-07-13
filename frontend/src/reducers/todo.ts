export type Todo = {
    id: string;
    title: string;
    content: string;
    date: Date;
}

export type TodoState = {
    todos: Todo[]
}

const initTodoState: TodoState = {
    todos: []
}

export const todoReducer = (state: TodoState = initTodoState, action: {type: string, payload: {todo?: Todo, todos?: Todo[], todoId?: string}}) => {

    switch (action.type) {
        case ("INITTODOS"):
            console.log(action)
            return {...state, todos: action.payload.todos as Todo[]}
        case ("ADDTODO"):
            const todos: Todo[] = state.todos;
            todos.push(action.payload.todo as Todo)
            return {...state, todos: todos}
        case ("UPDATETODO"):
            return {...state, todos: state.todos.map((todo: Todo) => todo.id === (action.payload.todo as Todo).id ? action.payload.todo : todo)}
        case ("DELETETODO"):
            return {...state, todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.todoId as String)}
        default:
            return state;
    }

}
