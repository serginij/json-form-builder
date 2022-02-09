import React from 'react';

import { Checkbox, Textarea, Input } from 'components';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">JSON forms builder</header>
      <div className="content">
        <Input label="Input" />
        <Textarea label="Textarea" />
        <Checkbox label="Checkbox" />
      </div>
    </div>
  );
}

export default App;
