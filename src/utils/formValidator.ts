import { IJsonForm, ItemType } from 'types';
import * as yup from 'yup';

export interface IFormError {
  controls: string;
  items: string;
  title: string;
}

const validationSchema = yup.object().shape({
  controls: yup.array().of(
    yup.object().shape({
      text: yup.string().trim().required('Text required'),
      variant: yup.string().oneOf(['contained', 'outlined']),
    }),
  ),
  title: yup.string(),
  items: yup.array().of(
    yup.object().shape({
      label: yup.string().trim().required('Label required'),
      type: yup
        .string()
        .oneOf(Object.values(ItemType))
        .required('Type required'),
      options: yup
        .array()
        .test(
          'Invalid item.options',
          'Invalid item.options. Must include: type, value',
          function (options?: Array<{ label: string; value: any }>) {
            if (this.parent.type === 'radio') {
              if (Array.isArray(options)) {
                return options.every(({ label, value }) => {
                  return (
                    typeof label === 'string' &&
                    ['string', 'number', 'boolean'].includes(typeof value)
                  );
                });
              }
              return false;
            }

            return true;
          },
        ),
    }),
  ),
});

export const validateForm = async (form: IJsonForm): Promise<any> => {
  try {
    await validationSchema.validate(form, { abortEarly: false });
  } catch (err: unknown) {
    const validatonError = err as yup.ValidationError;
    const { inner } = validatonError;

    const errors = inner.reduce((acc, { path, message }) => {
      return Object.assign(acc, { [path!]: message });
    }, {} as IFormError);

    throw errors;
  }
};
