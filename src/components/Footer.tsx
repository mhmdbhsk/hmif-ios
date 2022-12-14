import { IosLogo, KominfoLogo } from '@/assets';
import SocialLinks from '@/configs/SocialLinks';
import useColorScheme from '@/hooks/useColorScheme';
import { useWindowSize } from '@/hooks/useMediaQuery';
import useSharedStyles from '@/theme/shared-styles';
import {
  Anchor,
  createStyles,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  paperMargin: {
    margin: '80px 0 0',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      margin: '80px 0 0',
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      margin: '60px 0 0',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      margin: '40px 0 0',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      margin: '24px 0 0',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      margin: '24px 0 0',
    },
  },
  stackPadding: {
    padding: '50px 64px',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      padding: '50px 64px',
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      padding: '40px 48px',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '30px 32px',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: '30px 32px',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      padding: '30px 32px',
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const { classes: sharedClasses } = useSharedStyles();
  const isDark = useColorScheme();
  const { largeMobile, smallMobile, tablet, extraSmallMobile } =
    useWindowSize();

  return (
    <Paper
      radius={
        extraSmallMobile
          ? 24
          : smallMobile
          ? 32
          : largeMobile
          ? 40
          : tablet
          ? 56
          : 64
      }
      withBorder
      className={classes.paperMargin}
      sx={(theme) => ({
        backgroundColor: isDark ? theme.colors.dark[6] : theme.colors.gray[0],
        color: isDark ? 'white' : theme.colors.dark[8],
        borderColor: isDark ? theme.colors.gray[8] : theme.colors.gray[2],
      })}
    >
      <Stack
        spacing={
          extraSmallMobile
            ? 24
            : smallMobile
            ? 30
            : largeMobile
            ? 34
            : tablet
            ? 38
            : 44
        }
        className={classes.stackPadding}
      >
        <IosLogo />

        <Text className={sharedClasses.regularFontResponsive}>
          Informatics Ongoing Story adalah buletin daring yang menyediakan
          informasi seputar teknologi, informatika, dan Departemen Informatika
          Universitas Diponegoro kepada mahasiswa Informatika dan masyarakat
          umum.
        </Text>
        <Group>
          {SocialLinks.map((item) => (
            <Anchor
              key={item.name}
              href={item.link}
              target='_blank'
              className={sharedClasses.regularFontResponsive}
            >
              {item.name}
            </Anchor>
          ))}
        </Group>
      </Stack>

      <Divider
        sx={(theme) => ({
          borderColor: isDark ? theme.colors.gray[8] : theme.colors.gray[2],
        })}
      />

      <Group className={classes.stackPadding}>
        <KominfoLogo />
        <Text className={sharedClasses.regularFontResponsive}>
          &copy; 2022 Kominfo Himpunan Mahasiswa Informatika Universitas
          Diponegoro
        </Text>
      </Group>
    </Paper>
  );
};

export default Footer;
