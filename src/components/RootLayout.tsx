import { Header, Footer } from '@/components';
import AppNavigationLinks from '@/configs/AppNavigation';
import { Container } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <Container size={1200} sx={{ padding: '0px 24px' }}>
      <Header links={AppNavigationLinks} />
      {children}
      <Footer />
    </Container>
  );
};

export default RootLayout;
