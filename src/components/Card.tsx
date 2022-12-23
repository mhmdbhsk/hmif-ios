import useColorScheme from '@/hooks/useColorScheme';
import useSharedStyles from '@/theme/shared-styles';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {
  ActionIcon,
  Anchor,
  Box,
  createStyles,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons';
import { ReactNode } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  iconImage: {
    width: 'fit-content',
  },
  iconImageWrapper: {
    borderRadius: 999,
    height: 80,
    width: 80,
  },
  titleFont: {
    fontSize: 32,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 32,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 28,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 24,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 22,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 16,
    },
  },
}));

type BaseProps = {
  variant: 'video-profile' | 'event' | 'biro';
  id: string;
};

type VideoContentProps = {
  title: string;
  description: string;
  link: string;
  videoId: string;
  channel: string;
};

type EventContentProps = {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
};

type BiroContentProps = {
  title: string;
  description: string | ReactNode | ReactJSXElement;
  icon: string;
  thumbnail: string;
  path: string;
  color: string;
};

type ConditionalProps =
  | {
      variant: 'video-profile';
      content: VideoContentProps;
    }
  | {
      variant: 'event';
      content: EventContentProps;
    }
  | {
      variant: 'biro';
      content: BiroContentProps;
    };

type CardProps = BaseProps & ConditionalProps;

const Card = ({ variant, id, content }: CardProps) => {
  const { classes } = useStyles();
  const { classes: sharedClasses } = useSharedStyles();
  const isDark = useColorScheme();

  const cardRender = () => {
    switch (variant) {
      case 'video-profile':
        return (
          <Grid>
            <Grid.Col xl={6} md={12}>
              <Image
                radius='md'
                src={`https://img.youtube.com/vi/${content.videoId}/sddefault.jpg`}
                alt={content.title}
                width={'100%'}
                height={500}
                fit='cover'
                styles={{
                  caption: {
                    textAlign: 'start',
                  },
                  image: {
                    borderRadius: 64,
                  },
                }}
              />
            </Grid.Col>

            <Grid.Col
              xl={6}
              md={12}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 36px 64px',
              }}
            >
              <Stack spacing={44}>
                <Stack spacing={8}>
                  <Text weight={600} className={classes.titleFont}>
                    {content.title}
                  </Text>

                  <Text className={sharedClasses.regularFontResponsive}>
                    {content.description}
                  </Text>
                </Stack>
                <Stack spacing={24}>
                  <Anchor
                    href={content.link}
                    target='_blank'
                    className={sharedClasses.regularFontResponsive}
                  >
                    Tonton selengkapnya di YouTube <FiArrowUpRight />
                  </Anchor>

                  <Anchor
                    href={content.channel}
                    target='_blank'
                    className={sharedClasses.regularFontResponsive}
                  >
                    Lihat Channel <FiArrowUpRight />
                  </Anchor>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>
        );
      case 'event':
        return (
          <Grid>
            <Grid.Col xl={6} md={12}>
              <Image
                radius='md'
                src={content.thumbnail}
                alt={content.title}
                width={'100%'}
                height={500}
                fit='cover'
                styles={{
                  caption: {
                    textAlign: 'start',
                  },
                  image: {
                    borderRadius: 64,
                  },
                }}
              />
            </Grid.Col>

            <Grid.Col
              xl={6}
              md={12}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 36px 64px',
              }}
            >
              <Stack spacing={44}>
                <Stack spacing={8}>
                  <Text weight={600} className={classes.titleFont}>
                    {content.title}
                  </Text>

                  <Text className={sharedClasses.regularFontResponsive}>
                    {content.description}
                  </Text>
                </Stack>
                <Stack spacing={24}>
                  <Anchor
                    // href={content.link}
                    target='_blank'
                    className={sharedClasses.regularFontResponsive}
                  >
                    Test <FiArrowUpRight />
                  </Anchor>

                  <Anchor
                    // href={content.channel}
                    target='_blank'
                    className={sharedClasses.regularFontResponsive}
                  >
                    Lihat Channel <FiArrowUpRight />
                  </Anchor>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>
        );
      case 'biro':
        return (
          <Grid>
            <Grid.Col
              xl={6}
              md={12}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 64,
                height: '100%',
              }}
            >
              <Stack spacing={44}>
                <Stack spacing={8}>
                  <Group>
                    <Box h={80} w={80}>
                      <Image
                        src={content.icon}
                        alt={content.title}
                        classNames={{
                          root: classes.iconImage,
                          imageWrapper: classes.iconImageWrapper,
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                      <Text weight={600} className={classes.titleFont}>
                        {content.title}
                      </Text>
                    </Box>
                    <ActionIcon
                      component='a'
                      href={content.path}
                      target='_blank'
                      sx={{
                        background: '#fff',
                        height: 38,
                        width: 38,
                        borderRadius: 999,
                      }}
                    >
                      <IconBrandInstagram />
                    </ActionIcon>
                  </Group>

                  <Text className={sharedClasses.regularFontResponsive}>
                    {content.description}
                  </Text>
                </Stack>
              </Stack>
            </Grid.Col>

            <Grid.Col xl={6} md={12} sx={{ height: '100%' }}>
              <Image
                radius='md'
                src={content.thumbnail}
                alt={content.title}
                width={'100%'}
                height={'100%'}
                fit='cover'
                styles={{
                  caption: {
                    textAlign: 'start',
                  },
                  image: {
                    borderRadius: 64,
                    height: '100%',
                  },
                  imageWrapper: {
                    height: '100%',
                  },
                }}
              />
            </Grid.Col>
          </Grid>
        );
      default:
        break;
    }
  };

  return (
    <Paper
      radius={64}
      withBorder
      sx={(theme) => ({
        margin: variant === 'biro' ? '80px 0px 0px' : '80px 0',
        backgroundColor:
          variant === 'biro'
            ? '#F1F4FF'
            : isDark
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: isDark ? 'white' : theme.colors.dark[8],
        borderColor: isDark ? theme.colors.gray[8] : theme.colors.gray[2],
      })}
      id={id}
    >
      {cardRender()}
    </Paper>
  );
};

export default Card;
