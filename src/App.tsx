import React from 'react';

import { Input } from './components/Input';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">JSON forms builder</header>
      <div className="content">
        <Input label="label" />
      </div>
    </div>
  );
}

export default App;
