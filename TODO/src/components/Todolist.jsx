import React from 'react';

const Todo = ({ todo, completeTodo, removeTodo, onEditClick }) => {
    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
                <p className="creation-date">Criado em: {todo.createdAt.toLocaleString('pt-BR')}</p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}>
                    Completar
                </button>
                <button className="edit" onClick={() => onEditClick(todo)}>
                    Editar
                </button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>
                    x
                </button>
            </div>
        </div>
    );
};

export default Todo;
