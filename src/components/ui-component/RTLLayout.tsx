import createCache, { StylisPlugin } from '@emotion/cache';
// material-ui
import { CacheProvider } from '@emotion/react';
import { ReactNode, useEffect } from 'react';
// third-party
import rtlPlugin from 'stylis-plugin-rtl';

import useConfig from 'hooks/useConfig';

// ==============================|| RTL LAYOUT ||============================== //

interface RTLLayoutProps {
  children: ReactNode;
}

const RTLLayout = ({ children }: RTLLayoutProps) => {
  const { rtlLayout } = useConfig();

  useEffect(() => {
    document.dir = rtlLayout ? 'rtl' : 'ltr';
  }, [rtlLayout]);

  const cacheRtl = createCache({
    key: rtlLayout ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: rtlLayout ? [rtlPlugin as StylisPlugin] : [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RTLLayout;
