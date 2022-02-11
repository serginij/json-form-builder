# JSON form builder

This React App generates form by JSON config.

## JSON structure

```ts
export enum ItemType {
  NUMBER = 'number', // number input
  TEXT = 'text', // text input
  TEXTAREA = 'textarea', // textarea
  CHECKBOX = 'checkbox', // checkbox
  DATE = 'date', // built in datepicker
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

## Project structure

- `src/components` - UI Components (Button, Checkbox, Datepicker, etc.)
- `src/pages` - Content pages (JsonEditor, Form)
- `src/utils` - Helper functions
- `src/test` - Tests

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

The build is minified and the filenames include the hashes.

## JSON Sample

```json
{
  "items": [
    {
      "label": "Text",
      "type": "text"
    },
    {
      "label": "Number",
      "type": "number"
    },
    {
      "label": "Checkbox",
      "type": "checkbox"
    },
    {
      "label": "Textarea",
      "type": "textarea"
    },
    {
      "label": "Date",
      "type": "date"
    },
    {
      "label": "Radio",
      "type": "radio",
      "options": [
        {
          "label": "One",
          "value": 1
        },
        {
          "label": "Two",
          "value": 2
        },
        {
          "label": "Three",
          "value": 3
        }
      ]
    }
  ],
  "controls": [
    {
      "text": "Cancel",
      "variant": "outlined"
    },
    {
      "text": "Ok"
    }
  ],
  "title": "Title"
}
```
