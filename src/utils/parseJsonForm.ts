import { IJsonForm } from 'types';

import { EMPTY_FORM } from '../constants';

import { validateForm } from './formValidator';

export const parseJsonForm = async (
  json: Record<string, any>,
): Promise<IJsonForm> => {
  try {
    await validateForm(json as IJsonForm);
    const newForm: IJsonForm = { ...EMPTY_FORM };

    if (Array.isArray(json['items'])) {
      newForm.items = json['items'];
    }

    if (Array.isArray(json['controls'])) {
      newForm.controls = json['controls'];
    }

    if (typeof json?.title === 'string') {
      newForm.title = json?.title;
    }

    return newForm;
  } catch (err: any) {
    throw err;
  }
};
