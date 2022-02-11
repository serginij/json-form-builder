import React, { useMemo, useState } from 'react';

import './App.css';
import { Tabs } from 'components';
import { Form, JsonEditor } from 'pages';
import { IJsonForm } from 'types';
import { validateForm } from 'utils/formValidator';

const EMPTY_FORM = {
  items: [],
  controls: [],
  title: '',
};

const App = () => {
  const [form, setForm] = useState<IJsonForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  // TODO: make flexable
  // TODO: check in chrome / safari / firefox
  // TODO: write tests
  // TODO: write docs

  const handleChangeJson = async (json: Record<string, any>) => {
    try {
      await validateForm(json as IJsonForm);
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
      setErrors({});
    } catch (err: any) {
      setErrors(err);
    }
  };

  const tabs = useMemo(
    () => [
      {
        label: 'Form',
        Cmp: <Form form={form} />,
      },
      {
        label: 'Config',
        Cmp: (
          <JsonEditor
            errors={errors}
            onChangeJson={handleChangeJson}
            form={form}
          />
        ),
      },
    ],
    [form, errors],
  );

  return (
    <div className="app">
      <header className="header">JSON forms builder</header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
