import { Box, createStyles, Grid, Image, Stack, Text } from '@mantine/core';
import { Jumbotron, Title } from '@/components';
import useSharedStyles from '@/theme/shared-styles';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import Outline from '@/components/Outline';
import Paragraph from '@/components/Paragraph';
import Card from '@/components/Card';
import Tabs from '@/components/Tabs';

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

const communityOutline = [
  {
    title: 'Profil',
    description: 'Profil HMIF Undip',
    link: '#profil',
  },
  {
    title: 'Divisi',
    description: 'Apa sih divisi di HMIF?',
    link: '#divisi',
    color: '#FFEBCD',
  },
  {
    title: 'Biro',
    description: 'Wah, ada biro juga!?',
    link: '#biro',
    color: '#BFF0DB',
  },
  {
    title: 'Lagu',
    description: 'Lagunya kebanggaan anak IF Undip',
    link: '#lagu',
    color: '#FFCDCD',
  },
];

const Community: NextPageWithSeo = () => {
  const { classes: sharedClasses } = useSharedStyles();
  const { classes } = useStyles();
  const communityTabsContent = [
    {
      tabTitle: 'Sejarah',
      tabContent: (
        <Box sx={{ display: 'flex', width: '100%', margin: '24px 0' }}>
          <Paragraph
            content={[
              'Hallo Informatics!',

              'Ternyata HMIF udah berusia 16 Tahun loh. Eh tapi dulu namanya bukan HMIF loh. Kalian ingin tau ga sejarah terbentuknya HMIF? Yuk simak baik-baik.',

              'Sejarah HMIF tidak jauh dari sejarah Informatika itu sendiri. Pada tanggal 13 April 2004, Berdirinya Program Studi Teknik Informatika. Yup, Teknik Informatika, karena pada saat itu Program Studi ini masih berada di Fakultas Teknik. Nah baru pada tanggal 24 Juni 2006, beridirinya Himpunan Mahasiswa Ilmu Komputer atau HIMAKOM.  Memang pada saat itu namanya masih belum seperti sekarang.',

              'Hingga pada tanggal 23 Agustus 2010 namanya berubah menjadi HMIF (Himpunan Mahasiswa Teknik Informatika). Lalu Pada tanggal 12 Januari 2014, Program Studi ini berpindah ke Fakultas Sains dan Matematika. Berbagai pertimbangan dari kedua Fakultas bersepakat bahwa Teknik Informatika menjadi Program Studi di Fakultas Sains dan Matematika. Namanya pun berubah dari Teknik Informatika menjadi Informatika. Dan saat itu juga nama himpunannya menjadi Himpunan Mahasiswa Informatika ( HMIF ) dan masih berdiri sampai sekarang.',
            ]}
            id='history'
            multiColWithImage
            image='/images/sejarah-hmif.png'
          />
        </Box>
      ),
      tabValue: 'history',
    },
    {
      tabTitle: 'Visi Misi',
      tabContent: <Text>Visi Misi</Text>,
      tabValue: 'vision-and-mission',
    },
    {
      tabTitle: 'Nilai Luhur',
      tabContent: <Text>Nilai Luhur</Text>,
      tabValue: 'noble-value',
    },
  ];

  return (
    <>
      <Jumbotron
        title='Chapter 2'
        background='#FFEBCD'
        description={
          <Text>
            Hi Informatics!. Selamat datang di chapter dua. Pada chapter ini
            kalian akan berkenalan lebih lanjut dengan berbagai hal tentang
            Informatika Undip loh! Akan tetapi, kali ini di bidang
            non-akademiknya seperti organisasi, biro, lagu, dan masih banyak
            lagi. Makin penasaran kan? Yuk langsung klik tombol di bawah ini.
            Enjoy the chapter, Informatics!
          </Text>
        }
      />

      <Box className={sharedClasses.contentSpacing}>
        <Title title='HMIF’s Corner' subtitle='Yuk, kenalan sama HMIF Undip!' />
        <Outline outline={communityOutline} />
      </Box>

      <Stack spacing={80}>
        <Stack spacing={24} sx={{ padding: '0px 24px' }} id='profil'>
          <Text weight={600} className={classes.titleFont}>
            Profil
          </Text>

          <Tabs content={communityTabsContent} />
        </Stack>
      </Stack>
    </>
  );
};

Community.title = 'Community';
Community.pageTitle = 'Community';

export default Community;
