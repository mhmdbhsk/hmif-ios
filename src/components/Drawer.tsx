import { useState } from 'react';
import {
  Button,
  Group,
  Drawer as MantineDrawer,
  useMantineTheme,
} from '@mantine/core';

const Drawer = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <MantineDrawer
        opened={opened}
        onClose={() => setOpened(false)}
        title='Register'
        padding='xl'
        size='xl'
      >
        {/* Drawer content */}
      </MantineDrawer>

      <Group position='center'>
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
};

export default Drawer;
