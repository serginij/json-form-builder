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
  options?: Array<{ label: string; value: any }>;
}

export interface IControl {
  text: string;
  variant: 'contained' | 'outlined';
}

export interface IJsonForm {
  items: IItem[];
  controls: IControl[];
  title: string;
}
