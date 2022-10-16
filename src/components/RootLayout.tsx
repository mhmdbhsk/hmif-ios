import { Header, Footer } from '@/components';
import AppNavigationLinks from '@/configs/AppNavigation';
import {
  Box,
  Container,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { ReactNode } from 'react';
import CustomSeo from './CustomSeo';
import PageTransition from './PageTransition';

type RootLayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

const RootLayout = ({ children, pageTitle }: RootLayoutProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: colorScheme === 'dark' ? 'white' : theme.colors.dark[8],
      })}
    >
      <CustomSeo title={pageTitle} />

      <PageTransition>
        <Container
          size={1200}
          sx={{
            padding: '0px 24px 80px',
          }}
        >
          <Header links={AppNavigationLinks} />
          {children}
          <Footer />
        </Container>
      </PageTransition>
    </Box>
  );
};

export default RootLayout;
