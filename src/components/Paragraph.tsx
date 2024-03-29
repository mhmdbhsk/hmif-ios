import { useWindowSize } from '@/hooks/useMediaQuery';
import useSharedStyles from '@/theme/shared-styles';
import { Box, createStyles, Grid, Image, Stack, Text } from '@mantine/core';
import React from 'react';

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
  content: string[] | React.ReactNode[] | React.ReactNode | JSX.Element;
  title?: string;
  multiCol?: boolean;
  multiColWithImage?: boolean;
  image?: string;
  id: string;
};

const Paragraph = ({
  title,
  content,
  multiCol,
  multiColWithImage,
  image,
  id,
}: ParagraphProps) => {
  const { classes } = useStyles();
  const { classes: sharedClasses } = useSharedStyles();
  const { largeMobile, smallMobile, tablet, extraSmallMobile, desktop } =
    useWindowSize();

  const multiColumnRender = () => (
    <Stack spacing={24} sx={{ padding: '0px 24px' }} id={id}>
      <Text weight={600} className={classes.titleFont}>
        {title}
      </Text>

      <Grid gutter='xl'>
        {multiCol
          ? (content as []).map((item, index) => (
              <Grid.Col xl={6} md={12} key={index}>
                {typeof item !== 'string' ? (
                  item
                ) : (
                  <Text
                    align='justify'
                    sx={{ textJustify: 'inter-character' }}
                    className={sharedClasses.regularFontResponsive}
                  >
                    {item}
                  </Text>
                )}
              </Grid.Col>
            ))
          : content}
      </Grid>
    </Stack>
  );

  const defaultRender = () => (
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
          {multiCol
            ? (content as []).map((item, index) => <p key={index}>{item}</p>)
            : content}
        </Text>
      </Box>
    </Stack>
  );

  const multiColumnWithImageRender = () => (
    <Stack sx={{ padding: '24px 0px 0px' }} id={id}>
      {title && (
        <Text weight={600} className={classes.titleFont}>
          {title}
        </Text>
      )}

      <Grid gutter='xl'>
        <Grid.Col xl={4} md={12}>
          <Image
            src={image}
            alt={title}
            sx={{
              width: 'calc(100% + 48px) !important',
              marginLeft: '-24px !important',
            }}
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
          />
        </Grid.Col>
        <Grid.Col
          xl={8}
          md={12}
          sx={{
            paddingLeft: !desktop ? '48px' : 0,
          }}
        >
          <Text
            align='justify'
            sx={{ textJustify: 'inter-word' }}
            className={sharedClasses.regularFontResponsive}
          >
            {multiCol
              ? (content as []).map((item, index) => <p key={index}>{item}</p>)
              : content}
          </Text>
        </Grid.Col>
      </Grid>
    </Stack>
  );

  return multiCol
    ? multiColumnRender()
    : multiColWithImage
    ? multiColumnWithImageRender()
    : defaultRender();
};

export default Paragraph;
