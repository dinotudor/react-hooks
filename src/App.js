import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewtech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewtech('');
  }, [newTech, tech]);
  // same use of component did mount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);
  // same use of component did update
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <span>
        <em>Type the techs you know!</em>
      </span>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewtech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add Tech
      </button>
      <br />
      <strong>You know {techSize} tecnologies</strong>
    </>
  );
}

export default App;
