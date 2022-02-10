import React from 'react';

import { Checkbox, Textarea, Input, Button, RadioGroup } from 'components';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">JSON forms builder</header>
      <div className="content">
        <Input label="Input" />
        <Textarea label="Textarea" />
        <Checkbox label="Checkbox" />
        <Button text="Cancel" variant="outlined" />
        <Button>Ok</Button>
        <RadioGroup
          options={[
            { label: 'One', value: 1 },
            { label: 'Two', value: 2 },
            { label: 'Three', value: 3 },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
