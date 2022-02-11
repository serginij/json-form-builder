import { generateId } from 'utils';

describe('[generateId]', () => {
  const ids = new Set();

  it('should generate unique id', () => {
    for (let i = 0; i < 1000; i++) {
      ids.add(generateId());
    }

    expect(ids.size).toBe(1000);

    const id = generateId();
    ids.add(id);

    expect(ids.has(id)).toBe(true);

    expect(ids.has('random1234')).toBe(false);
  });

  it('should generate id with prefix', () => {
    const prefix = '1234';

    expect(generateId(prefix).startsWith('1234')).toBe(true);
  });
});
