import React from 'react';

function Header({ totalTugas }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1> Aplikasi To-Do List</h1>
      <p>Total Tugas Kamu: <strong>{totalTugas}</strong></p>
    </header>
  );
}

export default Header;
