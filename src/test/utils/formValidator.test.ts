import { validateForm } from 'utils/formValidator';

describe('[formValidator]', () => {
  it('should throw an error', async () => {
    const form = { title: 123, items: { a: 13 } };

    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should not throw an error', async () => {
    const form = {};

    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).toBeUndefined();
  });

  it('should throw an error (title)', async () => {
    const form = { title: {}, items: [], controls: [] };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should throw an error (items.type)', async () => {
    const form = {
      title: '',
      controls: [],
      items: [{ label: '12', type: 'abc' }],
    };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should throw an error (items.label)', async () => {
    const form = {
      title: '',
      controls: [],
      items: [{ label: '', type: 'text' }],
    };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should throw an error (items.options)', async () => {
    const form = {
      title: '',
      controls: [],
      items: [{ label: '124', type: 'radio' }],
    };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should throw an error (items.options.label)', async () => {
    const form = {
      title: '',
      controls: [],
      items: [
        { label: '123', type: 'radio', options: [{ label: 1, value: 1 }] },
      ],
    };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should throw an error (controls.text)', async () => {
    const form = { title: '', items: [], controls: [{ variant: 'contained' }] };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should throw an error (controls.variant)', async () => {
    const form = {
      title: '',
      items: [],
      controls: [{ text: '123', variant: 'acd' }],
    };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
  });

  it('should be valid ', async () => {
    const form = {
      title: '1234',
      items: [
        {
          label: 'Input',
          type: 'text',
        },
        {
          label: 'Radio',
          type: 'radio',
          options: [{ label: 'one', value: 1 }],
        },
      ],
      controls: [{ text: '123', variant: 'contained' }, { text: 'hello' }],
    };
    let error;
    try {
      await validateForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).toBeUndefined();
  });
});
