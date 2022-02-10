import React, { useState } from 'react';

import './App.css';
import { Tabs } from 'components';
import { Form, JsonEditor } from 'pages';
import { IJsonForm } from 'types';

const EMPTY_FORM = {
  items: [],
  controls: [],
  title: '',
};

const App = () => {
  const [form, setForm] = useState<IJsonForm>(EMPTY_FORM);

  // TODO: make flexable
  // TODO: check in chrome / safari / firefox

  const handleChangeJson = (json: Record<string, any>) => {
    // TODO: add deep checks
    try {
      const newForm: IJsonForm = EMPTY_FORM;

      if (Array.isArray(json['items'])) {
        newForm.items = json['items'];
      }

      if (Array.isArray(json['controls'])) {
        newForm.controls = json['controls'];
      }

      if (typeof json?.title === 'string') {
        newForm.title = json?.title;
      }

      setForm(newForm);
      console.log(newForm);
    } catch {}
  };

  return (
    <div className="app">
      <header className="header">JSON forms builder</header>
      <Tabs
        tabs={[
          {
            label: 'Form',
            Cmp: <Form form={form} />,
          },
          {
            label: 'Config',
            Cmp: <JsonEditor onChangeJson={handleChangeJson} form={form} />,
          },
        ]}
      />
    </div>
  );
};

export default App;
