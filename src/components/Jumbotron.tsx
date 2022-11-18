import { useWindowSize } from '@/hooks/useMediaQuery';
import { createStyles, Paper, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

const useStyles = createStyles((theme) => ({
  titleFont: {
    fontSize: 88,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 88,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 56,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 42,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 36,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 24,
    },
  },

  descriptionFont: {
    fontSize: 22,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 22,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 20,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 14,
    },
  },
  jumbotronPadding: {
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

type JumbotronProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  background?: string;
};

const Jumbotron = ({ title, description, background }: JumbotronProps) => {
  const { largeMobile, smallMobile, tablet, extraSmallMobile } =
    useWindowSize();
  const { classes } = useStyles();

  return (
    <Paper
      radius={
        extraSmallMobile
          ? 28
          : smallMobile
          ? 32
          : largeMobile
          ? 40
          : tablet
          ? 56
          : 64
      }
      className={classes.jumbotronPadding}
      sx={{
        background: background ?? '#DEDEFB',
      }}
    >
      <Stack spacing={16}>
        <Text
          className={classes.titleFont}
          weight='bold'
          sx={{ lineHeight: '110%' }}
        >
          {title}
        </Text>
        <Text className={classes.descriptionFont}>{description}</Text>
      </Stack>
    </Paper>
  );
};

export default Jumbotron;
