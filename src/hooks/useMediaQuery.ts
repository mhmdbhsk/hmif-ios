import { useMediaQuery } from '@mantine/hooks';

export const useWindowSize = () => {
  const desktop = useMediaQuery('(max-width: 1080px)');
  const tablet = useMediaQuery('(max-width: 720px)');
  const largeMobile = useMediaQuery('(max-width: 444px)');
  const smallMobile = useMediaQuery('(max-width: 350px)');
  const extraSmallMobile = useMediaQuery('(max-width: 315px)');

  return { desktop, tablet, largeMobile, smallMobile, extraSmallMobile };
};
