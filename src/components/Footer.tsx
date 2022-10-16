import { IosLogo, KominfoLogo } from '@/assets';
import { useWindowSize } from '@/hooks/useMediaQuery';
import useSharedStyles from '@/theme/shared-styles';
import { Anchor, Divider, Group, Paper, Stack, Text } from '@mantine/core';

const Footer = () => {
  const { classes, theme } = useSharedStyles();
  const { desktop, largeMobile, smallMobile, tablet } = useWindowSize();

  return (
    <Paper
      radius={
        desktop ? 64 : tablet ? 56 : largeMobile ? 40 : smallMobile ? 32 : 28
      }
      withBorder
      sx={{
        margin: desktop
          ? '80px 0'
          : tablet
          ? '60px 0'
          : largeMobile
          ? '40px 0'
          : smallMobile
          ? '24px 0'
          : '24px 0',
      }}
    >
      <Stack
        spacing={
          desktop ? 44 : tablet ? 38 : largeMobile ? 34 : smallMobile ? 30 : 24
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
        }}
      >
        <IosLogo />

        <Text className={classes.regularFontResponsive}>
          Informatics Ongoing Story adalah buletin daring yang menyediakan
          informasi seputar teknologi, informatika, dan Departemen Informatika
          Universitas Diponegoro kepada mahasiswa Informatika dan masyarakat
          umum.
        </Text>
        <Group>
          <Anchor
            href='#'
            target='_blank'
            className={classes.regularFontResponsive}
          >
            Instagram
          </Anchor>
          <Anchor
            href='#'
            target='_blank'
            className={classes.regularFontResponsive}
          >
            Twitter
          </Anchor>
          <Anchor
            href='#'
            target='_blank'
            className={classes.regularFontResponsive}
          >
            Facebook
          </Anchor>
          <Anchor
            href='#'
            target='_blank'
            className={classes.regularFontResponsive}
          >
            YouTube
          </Anchor>
          <Anchor
            href='#'
            target='_blank'
            className={classes.regularFontResponsive}
          >
            Github
          </Anchor>
        </Group>
      </Stack>

      <Divider />

      <Group
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
        }}
      >
        <KominfoLogo />
        <Text className={classes.regularFontResponsive}>
          &copy; 2022 Kominfo Himpunan Mahasiswa Informatika Universitas
          Diponegoro
        </Text>
      </Group>
    </Paper>
  );
};

export default Footer;
