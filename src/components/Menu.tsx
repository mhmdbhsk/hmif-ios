import { useWindowSize } from '@/hooks/useMediaQuery';
import { AppLinksDataDto } from '@/libs/dto';
import {
  Anchor,
  Burger,
  createStyles,
  Menu as MantineMenu,
  Stack,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';

type MenuProps = {
  links: AppLinksDataDto[];
};

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

const Menu = ({ links }: MenuProps) => {
  const { classes, theme } = useStyles();
  const router = useRouter();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [opened, { toggle }] = useDisclosure(false);
  const { largeMobile, smallMobile, tablet, extraSmallMobile } =
    useWindowSize();

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      className={classes.link}
      underline={false}
      onClick={() => {
        if (!link.disabled) {
          router.push(link.link);
        }
        toggle();
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

  const HEADER_HEIGHT = extraSmallMobile
    ? 75
    : smallMobile
    ? 85
    : largeMobile
    ? 90
    : tablet
    ? 95
    : 100;

  return (
    <MantineMenu
      closeOnClickOutside={true}
      closeOnEscape={true}
      closeOnItemClick={true}
      // shadow='md'
      width={'calc(100% - 48px)'}
      opened={opened}
      onClose={toggle}
      radius='xl'
      styles={{
        dropdown: {
          margin: '0 auto',
          right: 0,
          left: 0,
          top: `${HEADER_HEIGHT}px !important`,
        },
      }}
    >
      <MantineMenu.Target>
        <Burger
          className={classes.burger}
          opened={opened}
          onClick={toggle}
          size='sm'
          color={isDark ? 'white' : theme.colors.dark[8]}
        />
      </MantineMenu.Target>

      <MantineMenu.Dropdown bg={isDark ? 'dark' : '#fff'}>
        <Stack p={16} spacing={16}>
          {items}
        </Stack>
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
};

export default Menu;
