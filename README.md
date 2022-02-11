# JSON form builder

This React App generates form by JSON config.

## JSON structure

```ts
export enum ItemType {
  NUMBER = 'number', // number input
  TEXT = 'text', // text input
  TEXTAREA = 'textarea', // textarea
  CHECKBOX = 'checkbox', // checkbox
  DATE = 'date', // built in datepickeer
  RADIO = 'radio', // radio buttons
  BUTTON = 'button', // button
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
  items: IItem[]; // inputs
  controls: IControl[]; // buttons
  title: string; // title
}
```

## Available Scripts

In the project directory, you can run:

### `npm i`

Install all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
