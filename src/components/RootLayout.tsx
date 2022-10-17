import { Header, Footer } from '@/components';
import AppNavigationLinks from '@/configs/AppNavigation';
import { Box, Container, useMantineColorScheme } from '@mantine/core';
import { ReactNode } from 'react';
import CustomSeo from './CustomSeo';
import PageTransition from './Motion/PageTransition';
import { motion, useScroll, useSpring } from 'framer-motion';

type RootLayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

const RootLayout = ({ children, pageTitle }: RootLayoutProps) => {
  const { colorScheme } = useMantineColorScheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: colorScheme === 'dark' ? 'white' : theme.colors.dark[8],
      })}
    >
      <CustomSeo title={pageTitle} />

      <motion.div style={{ scaleX }} />
      <Container
        size={1200}
        sx={{
          padding: '0px 24px 40px',
        }}
      >
        <Header links={AppNavigationLinks} />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </Container>
    </Box>
  );
};

export default RootLayout;
