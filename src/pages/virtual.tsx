import { Box, createStyles, Stack, Text } from '@mantine/core';
import { Jumbotron, Title } from '@/components';
import useSharedStyles from '@/theme/shared-styles';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import Outline from '@/components/Outline';
import Card from '@/components/Card';
import VirtualLinks from '@/configs/VirtualLinks';

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

const virtualOutline = [
  {
    title: 'Website HMIF',
    description: 'Pusatnya informasi HMIF',
    link: '#website',
  },
  {
    title: 'Buku Link',
    description: 'Relasi nih bos!',
    link: '#bukulink',
    color: '#FFEBCD',
  },
  {
    title: 'DMW++',
    description: 'Ini dia kunci IPK 4.00',
    link: '#dmw',
    color: '#BFF0DB',
  },
  {
    title: 'Database Organisasi',
    description: 'Semua informasi ada disini lohh!',
    link: '#database',
    color: '#FFCDCD',
  },
];

const Virtual: NextPageWithSeo = () => {
  const { classes: sharedClasses } = useSharedStyles();
  const { classes } = useStyles();

  return (
    <>
      <Jumbotron
        title='Chapter 4'
        background='#F4DFF7'
        description={
          <Text>
            Pada chapter ini kamu akan dijelaskan terkait media-media yang
            digunakan HMIF Undip sebagai pencitraan ke luar Undip. Dengan tujuan
            memberikan informasi-informasi dan event yang sudah dan akan
            diadakan oleh HMIF Undip maupun kegiatan kampus kepada masyarakat.
          </Text>
        }
      />

      <Box className={sharedClasses.contentSpacing}>
        <Title
          title='Apaan Aja Hayoo...🤔'
          subtitle='Mau tahu? Langsung aja cuss!'
        />
        <Outline outline={virtualOutline} />
      </Box>

      <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='biro'>
        {VirtualLinks.map((item) => (
          <Card
            id={item.id}
            variant='virtual'
            content={item}
            key={item.title}
          />
        ))}
      </Stack>
    </>
  );
};

Virtual.title = 'Virtual';
Virtual.pageTitle = 'Virtual';

export default Virtual;
