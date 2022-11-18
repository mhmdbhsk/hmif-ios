import useColorScheme from '@/hooks/useColorScheme';
import useSharedStyles from '@/theme/shared-styles';
import {
  Anchor,
  createStyles,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { FiArrowUpRight } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  titleFont: {
    fontSize: 54,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 54,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 42,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 36,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 24,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 18,
    },
  },
}));

type BaseProps = {
  variant: 'video-profile' | 'event';
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

type ConditionalProps =
  | {
      variant: 'video-profile';
      content: VideoContentProps;
    }
  | {
      variant: 'event';
      content: EventContentProps;
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
      default:
        break;
    }
  };

  return (
    <Paper
      radius={64}
      withBorder
      sx={(theme) => ({
        margin: '80px 0',
        backgroundColor: isDark ? theme.colors.dark[6] : theme.colors.gray[0],
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
