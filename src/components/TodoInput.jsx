import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAddTodo(text); 
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px'}}>
      <input
        type="text"
        placeholder="Tulis tugas baru disini..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: '10px', fontSize: '16px'}}
      />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}> Tambah</button>
    </form>
  );
}

export default TodoInput;
