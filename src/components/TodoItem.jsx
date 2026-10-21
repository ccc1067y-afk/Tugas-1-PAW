import React from "react";

function TodoItem({ todo, onDeleteTodo }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc', background: '#f9f9f9', marginBottom: '5px', borderRadius: '4px' }}>
        <span>{todo.text}</span>
        <button onClick={() => onDeleteTodo(todo.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}> Hapus
        </button>
    </li>
  );
}

export default TodoItem;
