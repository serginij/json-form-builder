import React, { useState } from 'react';

import './JsonEditor.css';
import { Textarea } from 'components';
import { stringifyJson } from 'utils';

interface IJsonEditorProps {
  form: Record<string, any>;
  errors: Record<string, string>;

  onChangeJson: (json: Record<string, any>) => Promise<void>;
}

export const JsonEditor = ({
  onChangeJson,
  form,
  errors,
}: IJsonEditorProps) => {
  const [text, setText] = useState(stringifyJson(form));

  const handleChange = (text: string) => {
    try {
      const json = JSON.parse(text);
      onChangeJson(json);
      setText(stringifyJson(json));
    } catch {
      setText(text);
    }
  };

  const errorsList = Object.values(errors);

  return (
    <div className="config">
      <div>
        <p className="text">Input JSON config</p>
        <Textarea
          value={text}
          onChange={handleChange}
          className="config-textarea"
          error={errorsList.length > 0}
          helperText={errorsList.join('\n')}
        />
      </div>
    </div>
  );
};
