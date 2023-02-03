// next
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
// third-party
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Snackbar from 'ui-component/extended/Snackbar';
import Locales from 'ui-component/Locales';
import RTLLayout from 'ui-component/RTLLayout';

import { ConfigProvider } from '../contexts/ConfigContext';
import { JWTProvider as AuthProvider } from '../contexts/JWTContext';
import NavigationScroll from '../layout/NavigationScroll';
// project-import
import { store } from '../store';
import ThemeCustomization from '../themes';

// global styles
import '../styles/globals.css';
import '../scss/style.scss';

const queryClient = new QueryClient();

// types
type LayoutProps = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface Props {
  Component: LayoutProps;
}

function MyApp({ Component, pageProps }: AppProps & Props) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <Provider store={store}>
      <ConfigProvider>
        <ThemeCustomization>
          <RTLLayout>
            <Locales>
              <NavigationScroll>
                <QueryClientProvider client={queryClient}>
                  <AuthProvider>
                    <>
                      {getLayout(<Component {...pageProps} />)}
                      <Snackbar />
                    </>
                  </AuthProvider>
                </QueryClientProvider>
              </NavigationScroll>
            </Locales>
          </RTLLayout>
        </ThemeCustomization>
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
