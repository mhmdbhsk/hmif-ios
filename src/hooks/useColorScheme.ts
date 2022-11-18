import { useMantineColorScheme } from '@mantine/core';

const useColorScheme = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return dark;
};

export default useColorScheme;
