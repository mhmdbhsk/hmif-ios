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
    title: 'Latihan Rutin MATICS',
    description: 'Ayok Olahraga!',
    link: '#matics',
  },
  {
    title: 'Prospek Alumni',
    description: 'Relasi nih bos!',
    link: '#prospek-alumni',
    color: '#FFEBCD',
  },
  {
    title: 'Bus Undip',
    description: 'Gratis Lohh!!',
    link: '#bus-undip',
    color: '#BFF0DB',
  },
  {
    title: 'Produk Ekokeu',
    description: 'Semua kebutuhan ada disini lohh!',
    link: '#produk-ekokeu',
    color: '#FFCDCD',
  },
];

const data = [
  {
    image: '/images/ekokeu-product/merchandise-informatics.jpg',
    title: 'Merchandise Informatics (Matriks)',
    description:
      'Merchandise Informatics atau sering disebut Matriks menyediakan berbagai Merchandise untuk mahasiswa informatika. Merchandise yang disediakan pun beragam jenisnya dari T-Shirt, hoodie, sampai ke jersey. Bahkan Jaket Himpunan kebanggaan mahasiswa Informatika juga diproduksi melalui Matriks.',
  },
  {
    image: '/images/ekokeu-product/infomart.jpg',
    title: 'Informatics Mart (Infomart)',
    description:
      'Infomart memberikan akses mudah dalam membeli kebutuhan penunjang yang dibutuhkan mahasiswa Informatika. Mulai dari kebutuhan untuk keperluan akademik sampai kebutuhan penunjang lainnya. Kegiatan Infomart terpusat di ruang sekretariat HMIF lantai tiga gedung E FSM Undip.',
  },
  {
    image: '/images/ekokeu-product/klinik-komputer.jpg',
    title: 'Klinik Komputer (KK)',
    description:
      'Berawal dari permasalahan terkait komputer, Klinik Komputer menawarkan pelayanan berupa jasa service kepada mahasiswa Informatika maupun khalayak umum. Selain itu, Klinik Komputer juga memberikan layanan konsultasi terkait komputer serta memberikan konten edukasi yang disalurkan melalui media sosial Klinik Komputer.',
  },
  {
    image: '/images/ekokeu-product/promosi-bisnis.jpg',
    title: 'Proposal Bisnis (PROMIS)',
    description:
      'Membangun branding yang baik untuk sebuah bisnis itu tidak mudah, terlebih saat masih berstatus sebagai mahasiswa. Melalui permasalahan ini, Promis membantu mahasiswa dalam menyebarluaskan bisnisnya kepada masyarakat luas. Dengan begitu diharapkan bisnis yang dipromosikan dapat menjangkau lebih banyak orang. ',
  },
  {
    image: '/images/ekokeu-product/laporan-keuangan.jpg',
    title: 'Laporan Keuangan Bulanan',
    description:
      'Sebagai bentuk pertanggungjawaban Divisi Ekokeu dalam perihal keuangan kepada HMIF Undip, dilakukan sebuah langkah publikasi mengenai keadaan sebenarnya keuangan di Divisi Ekokeu. Laporan Keuangan dilakukan secara berkala dalam jangka waktu sebulan sekali untuk memberikan transparansi yang jelas mengenai keuangan Divisi Ekokeu.',
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
