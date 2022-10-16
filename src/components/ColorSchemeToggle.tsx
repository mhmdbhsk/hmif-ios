import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position='center'>
      <ActionIcon
        radius='xl'
        onClick={() => toggleColorScheme()}
        size='lg'
        sx={(theme) => ({
          backgroundColor:
            colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[2],
          color: colorScheme === 'dark' ? 'white' : theme.colors.dark[2],
          ':hover': {
            backgroundColor:
              colorScheme === 'dark'
                ? theme.colors.dark[9]
                : theme.colors.gray[3],
          },
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  );
};

export default ColorSchemeToggle;
