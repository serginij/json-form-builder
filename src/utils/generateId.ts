export const generateId = (prefix: string = 'id') => {
  return prefix + new Date().getTime();
};
