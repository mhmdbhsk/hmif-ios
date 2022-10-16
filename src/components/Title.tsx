import { createStyles, Stack, Text } from '@mantine/core';

type TitleProps = {
  title: string;
  subtitle: string;
};

const useStyles = createStyles((theme) => ({
  titleFont: {
    fontSize: 36,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 32,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 24,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 22,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 18,
    },
  },

  subtitleFont: {
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 32,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 24,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 22,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 18,
    },
  },
}));

const Title = ({ title, subtitle }: TitleProps) => {
  const { classes } = useStyles();

  return (
    <Stack spacing={0} sx={{ padding: '0 24px' }}>
      <Text weight='bold' className={classes.titleFont}>
        {title}
      </Text>
      <Text weight='bold' color='#8F8F8F' className={classes.titleFont}>
        {subtitle}
      </Text>
    </Stack>
  );
};

export default Title;
