// actions.js
import tasks, { saveTasksToLocalStorage } from './db'

export const addTodo = (text, category) => {
  const newTodo = {
    id: Date.now(),
    text,
    category,
    isCompleted: false,
    createdAt: new Date(),
  }

  tasks.push(newTodo)

  saveTasksToLocalStorage()

  return {
    type: 'ADD_TODO',
    payload: newTodo,
  }
}

export const removeTodo = (id) => {
  const indexToRemove = tasks.findIndex((task) => task.id === id)
  if (indexToRemove !== -1) {
    tasks.splice(indexToRemove, 1)

    saveTasksToLocalStorage()
  }

  return {
    type: 'REMOVE_TODO',
    payload: id,
  }
}
export const completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    payload: id,
  }
}

export const editTodo = (id, newText) => {
  return {
    type: 'EDIT_TODO',
    payload: {
      id,
      newText,
    },
  }
}
