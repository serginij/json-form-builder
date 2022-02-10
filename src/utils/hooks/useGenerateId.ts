import { useMemo } from 'react';

import { generateId } from 'utils';

export const useGenerateId = (deps: any[] = []) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const id = useMemo(() => generateId(), deps);

  return id;
};
