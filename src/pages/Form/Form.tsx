import React from 'react';

import './Form.css';
import {
  Input,
  Textarea,
  Checkbox,
  Button,
  RadioGroup,
  Datepicker,
} from 'components';
import { IItem, IJsonForm, ItemType } from 'types';

interface IFormProps {
  form: IJsonForm;
}

const { NUMBER, TEXT, TEXTAREA, CHECKBOX, DATE, RADIO } = ItemType;

export const Form = ({ form }: IFormProps) => {
  const { items, controls, title } = form;

  const getElementByType = ({
    label,
    type,
    options,
  }: IItem): React.ReactElement | null => {
    switch (type) {
      case TEXT:
        return <Input label={label} />;
      case TEXTAREA:
        return <Textarea label={label} />;
      case CHECKBOX:
        return <Checkbox label={label} />;
      case DATE:
        return <Datepicker label={label} />;
      case RADIO:
        return options ? <RadioGroup label={label} options={options} /> : null;
      case NUMBER:
        return <Input label={label} type="number" />;
      default:
        return null;
    }
  };

  return (
    <div className="content">
      <h1>{title}</h1>
      {items.map((item, index) => (
        <React.Fragment key={item.label + index}>
          {getElementByType(item)}
        </React.Fragment>
      ))}

      <div className="row">
        {controls.map(({ text, variant }, index) => (
          <Button key={text + index} text={text} variant={variant} />
        ))}
      </div>
    </div>
  );
};
