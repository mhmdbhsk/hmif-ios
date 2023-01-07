import { Box, createStyles, Stack, Text } from '@mantine/core';
import { Jumbotron, Title } from '@/components';
import useSharedStyles from '@/theme/shared-styles';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import Outline from '@/components/Outline';
import Card from '@/components/Card';
import InformationLinks from '@/configs/InformationLinks';
import CardsCarousel from '@/components/Carousel';

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
    title: 'Latihan Rutin',
    description: 'Ayok Olahraga !',
    link: '#latihan-rutin',
  },
  {
    title: 'Prospek Alumni',
    description: 'Relasi nih bos!',
    link: '#prospek-alumni',
    color: '#FFEBCD',
  },
  {
    title: 'Bus Undip',
    description: 'Ini dia kunci IPK 4.00',
    link: '#bus-undip',
    color: '#BFF0DB',
  },
  {
    title: 'Produk Ekokeu',
    description: 'Semua informasi ada disini lohh!',
    link: '#produk-ekokeu',
    color: '#FFCDCD',
  },
];

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
  },
];

const Information: NextPageWithSeo = () => {
  const { classes: sharedClasses } = useSharedStyles();
  const { classes } = useStyles();

  return (
    <>
      <Jumbotron
        title='Chapter 5'
        background='#FFCDCD'
        description={
          <Text>
            Pada chapter ini kamu akan dijelaskan terkait media-media yang
            digunakan HMIF Undip sebagai pencitraan ke luar Undip. Dengan tujuan
            memberikan informasi-informasi dan event yang sudah/akan diadakan
            oleh HMIF Undip maupun kegiatan kampus kepada masyarakat. Penasaran
            kan? Yuk scroll! hehehe 😁
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
        {InformationLinks.map((item) => (
          <Card
            id={item.id}
            variant='information'
            content={item}
            key={item.title}
          />
        ))}
      </Stack>

      <Stack id='produk-ekokeu'>
        <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='divisi'>
          <Text
            weight={600}
            className={classes.titleFont}
            sx={{ paddingBottom: 60 }}
          >
            Produk Ekonomi dan Keuangan
          </Text>
        </Stack>

        <CardsCarousel data={data} />
      </Stack>
    </>
  );
};

Information.title = 'Informasi';
Information.pageTitle = 'Informasi';

export default Information;
