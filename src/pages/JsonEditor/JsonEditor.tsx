import React, { useState } from 'react';

import './JsonEditor.css';
import { Textarea } from 'components';
import { stringifyJson } from 'utils';

interface IJsonEditorProps {
  form: Record<string, any>;
  onChangeJson: (json: Record<string, any>) => void;
}

export const JsonEditor = ({ onChangeJson, form }: IJsonEditorProps) => {
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

  return (
    <div className="config">
      <div>
        <p className="text">Input JSON config</p>
        <Textarea
          value={text}
          onChange={handleChange}
          className="config-textarea"
        />
      </div>
    </div>
  );
};
