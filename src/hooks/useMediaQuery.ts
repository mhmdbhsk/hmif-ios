import { useMediaQuery } from '@mantine/hooks';

export const useWindowSize = () => {
  const desktop = useMediaQuery('(min-width: 1080px)');
  const tablet = useMediaQuery('(min-width: 720px)');
  const largeMobile = useMediaQuery('(min-width: 444px)');
  const smallMobile = useMediaQuery('(min-width: 350px)');

  return { desktop, tablet, largeMobile, smallMobile };
};
