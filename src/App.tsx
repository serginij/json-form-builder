import React from 'react';

import {
  Checkbox,
  Textarea,
  Input,
  Button,
  RadioGroup,
  Datepicker,
  Tabs,
} from 'components';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">JSON forms builder</header>
      <Tabs
        tabs={[
          {
            label: 'Form',
            Cmp: (
              <div className="content">
                <Input label="Input" />
                <Input label="Number" type="number" />
                <Textarea label="Textarea" />
                <Checkbox label="Checkbox" />
                <div className="row">
                  <Button text="Cancel" variant="outlined" />
                  <Button>Ok</Button>
                </div>
                <RadioGroup
                  label="Radio"
                  options={[
                    { label: 'One', value: 1 },
                    { label: 'Two', value: 2 },
                    { label: 'Three', value: 3 },
                  ]}
                />
                <Datepicker label="Datepicker" />
              </div>
            ),
          },
          {
            label: 'Config',
            Cmp: (
              <div>
                <p>Tab 2 content</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default App;
