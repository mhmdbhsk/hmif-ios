import { Center, Loader, useMantineTheme } from '@mantine/core';
import React from 'react';

export const Loading = () => {
  const theme = useMantineTheme();

  return (
    <Center sx={{ width: '100%', height: '100vh' }}>
      <Loader color={theme.primaryColor} />
    </Center>
  );
};
