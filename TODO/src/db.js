// db.js
const storedTasks = localStorage.getItem('tasks')
const tasks = storedTasks
  ? JSON.parse(storedTasks)
  : [
      {
        id: 1,
        text: 'lorem ipsum',
        category: 'trabalho',
        isCompleted: false,
        createdAt: new Date(),
      },
      {
        id: 2,
        text: 'lorem ipsum',
        category: 'pessoal',
        isCompleted: false,
        createdAt: new Date(),
      },
      {
        id: 3,
        text: 'lorem ipsum',
        category: 'estudos',
        isCompleted: false,
        createdAt: new Date(),
      },
    ]

export const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export default tasks
