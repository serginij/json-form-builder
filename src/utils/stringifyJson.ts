export const stringifyJson = (json: Record<string, any>): string => {
  try {
    return JSON.stringify(json, null, 3);
  } catch {
    return '{}';
  }
};
