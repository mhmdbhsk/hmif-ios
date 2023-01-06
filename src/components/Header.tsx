import { IosLogo } from '@/assets';
import { useWindowSize } from '@/hooks/useMediaQuery';
import { AppLinksDataDto } from '@/libs/dto';
import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Box,
  Anchor,
  useMantineColorScheme,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { FiArrowUpRight } from 'react-icons/fi';
import ColorSchemeToggle from './ColorSchemeToggle';
import Menu from './Menu';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },

  links: {
    flexGrow: 1,
    [theme.fn.smallerThan(1080)]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan(1080)]: {
      display: 'none',
    },
  },

  returnButton: {
    [theme.fn.smallerThan(1080)]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.xl,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: AppLinksDataDto[];
}

export default function HeaderAction({ links }: HeaderActionProps) {
  const { classes, theme } = useStyles();
  const router = useRouter();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const { largeMobile, smallMobile, tablet, extraSmallMobile } =
    useWindowSize();

  const HEADER_HEIGHT = extraSmallMobile
    ? 75
    : smallMobile
    ? 85
    : largeMobile
    ? 90
    : tablet
    ? 95
    : 100;

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      className={classes.link}
      underline={false}
      onClick={() => {
        if (!link.disabled) {
          router.push(link.link);
        }
      }}
      sx={{
        '&:hover': {
          backgroundColor: isDark
            ? link.disabled
              ? 'transparent'
              : theme.colors.dark[9]
            : link.disabled
            ? 'transparent'
            : theme.colors.gray[2],
        },
        cursor: link.disabled ? 'not-allowed' : 'pointer',
        color: isDark
          ? link.disabled
            ? theme.colors.gray[7]
            : theme.colors.gray[5]
          : link.disabled
          ? theme.colors.gray[6]
          : theme.colors.gray[8],
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={(theme) => ({
        borderBottom: 0,
        padding: '0px 24px',
        backgroundColor: isDark ? theme.colors.dark[6] : theme.colors.gray[0],
        color: isDark ? 'white' : theme.colors.dark[8],
      })}
    >
      <Container
        className={classes.inner}
        style={{ height: HEADER_HEIGHT }}
        fluid
      >
        <Group
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Menu links={links} />

          <Group
            spacing={0}
            sx={{
              display: 'flex',
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => router.push('/')}
            >
              <IosLogo />
            </Box>

            {/* <Box
              sx={{ marginLeft: 16, display: largeMobile ? 'none' : 'flex' }}
            >
              <Text
                size={
                  extraSmallMobile
                    ? 14
                    : smallMobile
                    ? 14
                    : largeMobile
                    ? 14
                    : tablet
                    ? 14
                    : 16
                }
                weight={600}
                onClick={() => router.push('/')}
              >
                Informatics Ongoing Story
              </Text>
            </Box> */}
          </Group>
        </Group>

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Group>
          <Box
            sx={{
              display: largeMobile ? 'none' : 'flex',
            }}
          >
            <ColorSchemeToggle />
          </Box>

          <Button
            className={classes.returnButton}
            onClick={() => router.push('https://hmif-undip.com/ios/')}
            radius={'xl'}
            sx={{
              background: '#FFEBCD',
              color: '#000',
              ':hover': {
                background: '#D4C4AB',
              },
            }}
            rightIcon={<FiArrowUpRight />}
          >
            Kembali ke versi sebelumnya
          </Button>
        </Group>
      </Container>
    </Header>
  );
}
