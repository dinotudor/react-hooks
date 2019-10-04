import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewtech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewtech('');
  }
  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewtech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add Tech
      </button>
    </>
  );
}

export default App;
