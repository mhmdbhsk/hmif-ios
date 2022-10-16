import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { RootLayout } from '@/components';
import theme from '@/theme';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import {
  GetServerSidePropsContext,
  NextComponentType,
  NextPageContext,
} from 'next';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

type NextComponentWithSeo = NextComponentType<NextPageContext, any, {}> &
  Partial<NextPageWithSeo>;

type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithSeo;
  colorScheme: ColorScheme;
};

export default function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <LazyMotion features={domAnimation}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <AnimatePresence
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
            exitBeforeEnter
          >
            <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
              <RootLayout pageTitle={Component.pageTitle}>
                <Component {...pageProps} />
              </RootLayout>
            </MantineProvider>
          </AnimatePresence>
        </ColorSchemeProvider>
      </LazyMotion>
    </>
  );
}
