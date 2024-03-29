import {
  Box,
  Card as MantineCard,
  createStyles,
  Grid,
  Stack,
  Text,
  Paper,
  Flex,
  Modal,
  Image,
} from '@mantine/core';
import { Jumbotron, Title } from '@/components';
import useSharedStyles from '@/theme/shared-styles';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import Outline from '@/components/Outline';
import Paragraph from '@/components/Paragraph';
import Tabs from '@/components/Tabs';
import nobleValueData from '@/constants/nobleValueData';
import Division from '@/components/Divisions';
import DivisionsLinks from '@/configs/DivisionsLinks';
import Card from '@/components/Card';
import BiroLinks from '@/configs/BiroLinks';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from 'react';

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

const organizationOutline = [
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

const Organization: NextPageWithSeo = () => {
  const { classes: sharedClasses } = useSharedStyles();
  const { classes } = useStyles();
  const [opened, setOpened] = useState<false | 1 | 2>(false);

  const containerMotion = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
    },
    tap: {
      scale: 0.95,
    },
  };

  const organizationTabsContent = [
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
      tabValue: 'vision-and-mission',
      tabContent: (
        <Box sx={{ display: 'flex', width: '100%', margin: '24px 0' }}>
          <Paragraph
            content={[
              <Box key={1} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Text size={24} weight='bold'>
                  Visi
                </Text>

                <Box>
                  <ul>
                    <li>
                      Memperkuat komunikasi dan relasi terhadap seluruh elemen
                      Informatika sehingga menciptakan sinergitas yang baik
                    </li>
                    <li>
                      Menciptakan ikmin yang harmonis berdasarkan nilai
                      kekeluargaan guna meningkatkan profesional dan solidaritas
                      di internal HMIF 2022
                    </li>
                    <li>
                      Mengoptimalkan peran media dan kehumasan sebagai sarana
                      penyampaian informasi, menjalin relasi dengan lingkup
                      eksternal, serta representasi citra positif HMIF 2022
                    </li>
                  </ul>
                </Box>
              </Box>,
              <Box key={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Text size={24} weight='bold'>
                  Misi
                </Text>

                <Text>
                  Terbentuknya HMIF 2022 sebagai himpunan yang Kolaboratif,
                  Inovatif, Menyeluruh dan mampu menjadi Samudra dalam
                  mewujudkan asa Informatika
                </Text>
              </Box>,
            ]}
            id='vision-and-mission'
            multiCol
          />
        </Box>
      ),
    },
    {
      tabTitle: 'Nilai Luhur',
      tabContent: (
        <Box sx={{ paddingTop: 72, margin: -24 }}>
          <Grid gutter='xl' justify='space-between' sx={{ margin: -12 }}>
            {nobleValueData.map((item) => (
              <Grid.Col xl={6} md={12} key={item.title}>
                <MantineCard
                  radius={32}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 16,
                      width: 'max-content',
                    }}
                  >
                    {item.icon}
                    {item.title}
                  </Box>
                </MantineCard>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      ),
      tabValue: 'noble-value',
    },
  ];

  return (
    <>
      <Modal
        opened={opened === 1}
        onClose={() => setOpened(false)}
        title='Mars Informatika Undip - Semangat Juang'
      >
        <Image src='/images/lirik/lirik-1.png' alt='Lirik Semangat Juang' />
      </Modal>

      <Modal
        opened={opened === 2}
        onClose={() => setOpened(false)}
        title='IF Choir - Langkah Bersama'
      >
        <Image src='/images/lirik/lirik-2.png' alt='Lirik Langkah Bersama' />
      </Modal>

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
        <Outline outline={organizationOutline} />
      </Box>

      <Stack spacing={80}>
        <Stack spacing={24} sx={{ padding: '0px 24px' }} id='profil'>
          <Text weight={600} className={classes.titleFont}>
            Profil
          </Text>

          <Tabs content={organizationTabsContent} />
        </Stack>
      </Stack>

      <Stack>
        <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='divisi'>
          <Text weight={600} className={classes.titleFont}>
            Divisi
          </Text>
        </Stack>
        <Division division={DivisionsLinks} />
      </Stack>

      <Stack>
        <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='lagu'>
          <Text weight={600} className={classes.titleFont}>
            Lagu
          </Text>
        </Stack>
        <Flex gap={32}>
          <Paper
            radius={32}
            sx={{
              padding: 32,
              background: '#B7C8FF',
              cursor: 'pointer',
              marginBottom: 46,
              display: 'flex',
              width: '50%',
              gap: 16,

              flexDirection: 'column',
            }}
            component={motion.div}
            initial='rest'
            whileHover='hover'
            whileTap='tap'
            animate='rest'
            variants={containerMotion}
            onClick={() => setOpened(1)}
          >
            <Text>Mars Informatika Undip - Semangat Juang</Text>

            <Box>
              <ReactAudioPlayer
                src={'/audio/semangat-juang.mp3'}
                controls
                autoPlay={false}
                style={{
                  width: '100%',
                }}
              />
            </Box>
          </Paper>
          <Paper
            radius={32}
            sx={{
              padding: 32,
              background: '#B7C8FF',
              cursor: 'pointer',
              marginBottom: 46,
              display: 'flex',
              width: '50%',
              gap: 16,

              flexDirection: 'column',
            }}
            component={motion.div}
            initial='rest'
            whileHover='hover'
            whileTap='tap'
            animate='rest'
            variants={containerMotion}
            onClick={() => setOpened(2)}
          >
            <Text>IF Choir - Langkah Bersama</Text>

            <Box>
              <ReactAudioPlayer
                src={'/audio/langkah-bersama.mp3'}
                controls
                autoPlay={false}
                style={{
                  width: '100%',
                }}
              />
            </Box>
          </Paper>
        </Flex>
      </Stack>

      <Stack>
        <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='biro'>
          <Text weight={600} className={classes.titleFont}>
            Biro
          </Text>
        </Stack>

        {BiroLinks.map((item) => (
          <Card
            id={item.title}
            variant='biro'
            content={item}
            key={item.title}
          />
        ))}
      </Stack>
    </>
  );
};

Organization.title = 'Himpunan';
Organization.pageTitle = 'Himpunan';

export default Organization;
