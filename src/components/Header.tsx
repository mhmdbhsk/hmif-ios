import { IosLogo } from '@/assets';
import { useWindowSize } from '@/hooks/useMediaQuery';
import { AppLinksDataDto } from '@/libs/dto';

import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Text,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { useRouter } from 'next/router';
import { FiArrowUpRight } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    [theme.fn.smallerThan('lg')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: AppLinksDataDto[];
}

export default function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const { desktop, largeMobile, smallMobile, tablet } = useWindowSize();
  const HEADER_HEIGHT = desktop
    ? 100
    : tablet
    ? 95
    : largeMobile
    ? 90
    : smallMobile
    ? 85
    : 75;

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger='hover' exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => {
          event.preventDefault();
          router.push(link.link);
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container
        className={classes.inner}
        style={{ height: HEADER_HEIGHT }}
        fluid
      >
        <Group
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size='sm'
          />
          <Group
            onClick={() => router.push('/')}
            sx={{
              display: 'flex',
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: desktop
                  ? 'flex'
                  : tablet
                  ? 'flex'
                  : largeMobile
                  ? 'flex'
                  : smallMobile
                  ? 'none'
                  : 'none',
              }}
            >
              <IosLogo />
            </Box>

            <Box>
              <Text
                size={
                  desktop
                    ? 16
                    : tablet
                    ? 14
                    : largeMobile
                    ? 14
                    : smallMobile
                    ? 14
                    : 14
                }
                weight={600}
              >
                Informatics Ongoing Story
              </Text>
            </Box>
          </Group>
        </Group>

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Button
          className={classes.returnButton}
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
          Return to old version
        </Button>
      </Container>
    </Header>
  );
}
