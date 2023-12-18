// reducers/todos.js
import tasks from '../db'

const initialState = {
  todos: tasks,
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = action.payload
      return {
        ...state,
        todos: [...state.todos, newTodo],
      }

    case 'REMOVE_TODO':
      const todoIdToRemove = action.payload
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== todoIdToRemove),
      }

    case 'COMPLETE_TODO':
      const todoIdToComplete = action.payload
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === todoIdToComplete
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      }

    case 'EDIT_TODO':
      const { id, newText } = action.payload
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        ),
      }

    default:
      return state
  }
}

export default todosReducer
