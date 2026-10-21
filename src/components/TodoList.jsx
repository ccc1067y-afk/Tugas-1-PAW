import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo }) {
    if (todos.length === 0) {
        return <p style={{ textAlign: 'center', color: '#888'}}>Belum ada tugas nih. Yuk tambah tugas baru mu!!!.</p>;
    }

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
         {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
         ))}
        </ul>
    );
}

export default TodoList;
