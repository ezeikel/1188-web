'use client';

import { UIContextProvider } from '@/contexts/ui';

const Providers = ({ children }) => (
  <UIContextProvider>{children}</UIContextProvider>
);

export default Providers;
