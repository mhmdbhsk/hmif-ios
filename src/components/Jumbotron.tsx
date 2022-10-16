import { useWindowSize } from '@/hooks/useMediaQuery';
import { Paper, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

type JumbotronProps = {
  title: string | ReactNode;
  description: string | ReactNode;
};

const Jumbotron = ({ title, description }: JumbotronProps) => {
  const { desktop, largeMobile, smallMobile, tablet } = useWindowSize();

  return (
    <Paper
      radius={
        desktop ? 64 : tablet ? 56 : largeMobile ? 40 : smallMobile ? 32 : 28
      }
      sx={{
        padding: desktop
          ? '50px 64px'
          : tablet
          ? '40px 48px'
          : largeMobile
          ? '30px 32px'
          : smallMobile
          ? '30px 32px'
          : '30px 32px',
        background: '#DEDEFB',
      }}
    >
      <Stack spacing={16}>
        <Text
          size={
            desktop
              ? 88
              : tablet
              ? 56
              : largeMobile
              ? 42
              : smallMobile
              ? 36
              : 24
          }
          weight='bold'
          sx={{ lineHeight: '110%' }}
        >
          {title}
        </Text>
        <Text
          size={
            desktop
              ? 22
              : tablet
              ? 20
              : largeMobile
              ? 16
              : smallMobile
              ? 14
              : 14
          }
          sx={{ lineHeight: '30px' }}
        >
          {description}
        </Text>
      </Stack>
    </Paper>
  );
};

export default Jumbotron;
