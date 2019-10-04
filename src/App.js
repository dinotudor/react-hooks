import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewtech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewtech('');
  }
  // same use of component did mount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

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
