// app.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, completeTodo, editTodo } from './actions';
import Todo from './components/Todolist';
import TodoForm from './components/TodoForm';
import EditModal from './components/EditModal';
import './app.css';

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleAddTodo = (text, category) => {
    dispatch(addTodo(text, category));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleEditClick = (todo) => {
    setEditedTodo(todo);
    setModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditedTodo(null);
    setModalIsOpen(false);
  };

  const handleSaveEditedTodo = (newText) => {
    if (editedTodo) {
      dispatch(editTodo(editedTodo.id, newText));
      closeEditModal();
    }
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={handleRemoveTodo}
            completeTodo={handleCompleteTodo}
            onEditClick={handleEditClick}
          />
        ))}
      </div>
      <TodoForm addTodo={handleAddTodo} />
      <EditModal
        isOpen={modalIsOpen}
        onRequestClose={closeEditModal}
        onSave={handleSaveEditedTodo}
        defaultText={editedTodo ? editedTodo.text : ''}
      />
    </div>
  );
}

export default App;
