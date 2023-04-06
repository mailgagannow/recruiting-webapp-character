import { useState } from 'react';
import './App.css';
import CharacterSheet from './components/characterSheet';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <CharacterSheet />
      </section>
    </div>
  );
}

export default App;
