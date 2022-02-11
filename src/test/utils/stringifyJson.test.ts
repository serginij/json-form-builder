import { stringifyJson } from '../../utils';

describe('[stringifyJson]', () => {
  it('should prettify JSON', () => {
    const data = {};
    const expected = '{}';

    expect(stringifyJson(data)).toBe(expected);
  });

  it('should prettify JSON', () => {
    const data = { a: 123 };
    const expected = `{
   "a": 123
}`;

    expect(stringifyJson(data)).toBe(expected);
  });

  it('should return 123', () => {
    const data = 123;
    const expected = `123`;

    expect(stringifyJson(data as any)).toBe(expected);
  });

  it('should return {}', () => {
    const data = new Error();
    const expected = '{}';

    expect(stringifyJson(data as any)).toBe(expected);
  });
});
