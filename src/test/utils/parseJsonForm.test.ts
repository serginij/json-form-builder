import { parseJsonForm } from 'utils';

describe('[parsseJsonForm]', () => {
  it('should throw error', async () => {
    const form = {
      title: '',
      controls: [],
      items: [{ label: '', type: 'text' }],
    };
    let error;
    let result;
    try {
      result = await parseJsonForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeUndefined();
    expect(result).toBeUndefined();
  });

  it('should parse form (items)', async () => {
    const form = {
      title: '1234',
      items: [{ label: 'One', type: 'text' }],
    };
    const expected = {
      title: '1234',
      controls: [],
      items: [{ label: 'One', type: 'text' }],
    };

    let error;
    let result;

    try {
      result = await parseJsonForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(result).toStrictEqual(expected);
    expect(error).toBeUndefined();
  });

  it('should parse form (title)', async () => {
    const form = {
      title: '1234',
    };

    const expected = {
      title: '1234',
      controls: [],
      items: [],
    };

    let error;
    let result;

    try {
      result = await parseJsonForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(result).toStrictEqual(expected);
    expect(error).toBeUndefined();
  });

  it('should parse form (controls)', async () => {
    const form = {
      controls: [{ text: 'One', variant: 'outlined' }],
    };
    const expected = {
      title: '',
      controls: [{ text: 'One', variant: 'outlined' }],
      items: [],
    };

    let error;
    let result;

    try {
      result = await parseJsonForm(form as any);
    } catch (err) {
      error = err;
    }

    expect(result).toStrictEqual(expected);
    expect(error).toBeUndefined();
  });
});
