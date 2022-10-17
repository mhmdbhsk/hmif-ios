import useSharedStyles from '@/theme/shared-styles';
import { Box, createStyles, Grid, Stack, Text } from '@mantine/core';

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

type ParagraphProps = {
  content: React.ReactNode | string | string[];
  title: string;
  multiCol?: number;
  id: string;
};

const Paragraph = ({ title, content, multiCol, id }: ParagraphProps) => {
  const { classes } = useStyles();
  const { classes: sharedClasses } = useSharedStyles();

  return multiCol && multiCol > 1 ? (
    <Stack spacing={24} sx={{ padding: '0px 24px' }} id={id}>
      <Text weight={600} className={classes.titleFont}>
        {title}
      </Text>

      <Grid gutter='xl'>
        {(content as []).map((paragraph, index) => (
          <Grid.Col xl={6} md={12} key={index}>
            <Text
              align='justify'
              sx={{ textJustify: 'inter-character' }}
              className={sharedClasses.regularFontResponsive}
            >
              {paragraph}
            </Text>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  ) : (
    <Stack spacing={24} sx={{ padding: '0px 24px' }} id={id}>
      <Text weight={600} className={classes.titleFont}>
        {title}
      </Text>
      <Box>
        <Text
          align='justify'
          sx={{ textJustify: 'inter-character' }}
          className={sharedClasses.regularFontResponsive}
        >
          {content}
        </Text>
      </Box>
    </Stack>
  );
};

export default Paragraph;
