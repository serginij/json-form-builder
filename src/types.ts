export enum ItemType {
  NUMBER = 'number',
  TEXT = 'text',
  TEXTAREA = 'textarea',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  RADIO = 'radio',
  BUTTON = 'button',
}

export interface IItem {
  label: string;
  type: ItemType;
}

export interface IControl {
  text: string;
  color: string;
  onClick: () => void;
}

export interface JsonForm {
  items: IItem[];
  controls: IControl[];
  title: string;
}
