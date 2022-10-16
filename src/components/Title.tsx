import { createStyles, Stack, Text } from '@mantine/core';

type TitleProps = {
  title: string;
  subtitle: string;
};

const useStyles = createStyles((theme) => ({
  titleFont: {
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 32,
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 28,
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 22,
    },
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 18,
    },
  },

  subtitleFont: {
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 32,
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 28,
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 22,
    },
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 18,
    },
  },
}));

const Title = ({ title, subtitle }: TitleProps) => {
  const { classes } = useStyles();

  console.log(classes.titleFont);

  return (
    <Stack spacing={0}>
      <Text weight='bold' className={classes.titleFont}>
        {title}
      </Text>
      <Text weight='bold' color='#8F8F8F' className={classes.subtitleFont}>
        {subtitle}
      </Text>
    </Stack>
  );
};

export default Title;
