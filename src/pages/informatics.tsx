import {
  Anchor,
  Box,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { FiArrowUpRight } from 'react-icons/fi';
import { Jumbotron, Title } from '@/components';
import useSharedStyles from '@/theme/shared-styles';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import Outline from '@/components/Outline';
import { useWindowSize } from '@/hooks/useMediaQuery';

const informaticsOutline = [
  {
    title: 'Tentang Kami',
    description: 'Departemen Informatika',
    link: '#tentang-kami',
  },
  {
    title: 'Fun Fact',
    description: 'Apa sih yang unik?',
    link: '#fun-fact',
  },
  {
    title: 'Video Profil',
    description: 'Kenal lebih dekat',
    link: '#video-profil',
  },
];

const Informatics: NextPageWithSeo = () => {
  const { classes: sharedClasses } = useSharedStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { largeMobile, smallMobile, tablet, extraSmallMobile } =
    useWindowSize();

  return (
    <>
      <Jumbotron
        title='Chapter 1 '
        description={
          <Text>
            Pada chapter ini kamu akan menyimak berbagai hal seputar
            Informatika, Universitas Diponegoro. Dimulai dari apa itu Departemen
            Informatika, fasilitas laboratorium, hingga fun fact dari
            Informatika.
          </Text>
        }
      />

      <Box className={sharedClasses.contentSpacing}>
        <Title
          title='Informatika? Apaan Tuh!'
          subtitle='Mau tahu? Langsung aja cuss!'
        />
        <Outline outline={informaticsOutline} />
      </Box>

      <Stack spacing={80}>
        <Stack spacing={80} sx={{ padding: '0px 24px' }}>
          <Text size={54} weight={600} id='tentang-kami'>
            Tentang Kami
          </Text>
          <Box>
            <Text>
              Informatika/Ilmu Komputer adalah ilmu yang mempelajari baik
              tentang komputasi, perangkat keras (hardware) maupun perangkat
              lunak (software). Ilmu komputer mencakup beragam topik yang
              berkaitan dengan komputer, mulai dari analisis abstrak algoritma
              sampai subyek yang lebih konkret seperti bahasa pemrograman,
              perangkat lunak, termasuk perangkat keras. Informatika beda loh
              dengan Teknik Komputer! Sebagai suatu disiplin ilmu, Ilmu Komputer
              lebih menekankan pada pemrograman komputer, dan rekayasa perangkat
              lunak (software). Sementara teknik komputer lebih cenderung
              berkaitan dengan hal-hal seperti perangkat keras komputer
              (hardware). Di Universitas Diponegoro sendiri Departemen
              Informatika merupakan bagian dari Fakultas Sains dan Matematika,
              sedangkan Departemen Teknik Komputer merupakan bagian dari
              Fakultas Teknik.
            </Text>
          </Box>
        </Stack>

        <Image
          radius='md'
          src='/images/gedung-informatika.png'
          alt='Gedung Informatika di Fakultas Sains dan Matematika'
          caption='Gedung Informatika di Fakultas Sains dan Matematika'
          styles={{
            caption: {
              textAlign: 'start',
            },
          }}
        />

        <Stack spacing={80} sx={{ padding: '0px 24px' }}>
          <Text size={54} weight={600}>
            Sejarah Informatika
          </Text>
          <Grid gutter='xl'>
            <Grid.Col span={6}>
              <Text align='justify' sx={{ textJustify: 'inter-character' }}>
                Pada tahun 1994 di Jurusan Matematika Universitas Diponegoro
                Semarang mulai memberlakukan kurikulum yang lebih mengarah pada
                aplikasi terapan di dunia nyata dan mengakomodasi kebutuhan
                pasar, sehingga kurikulum pada Jurusan Matematika Universitas
                Diponegoro Semarang dilakukan perubahan dengan membagi menjadi
                empat bidang peminatan, yaitu Matematika Murni, Matematika
                Terapan, Statistik, dan Ilmu Komputer.
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text align='justify' sx={{ textJustify: 'inter-character' }}>
                Pada tahun 2004, berdasarkan surat Direktorat Jenderal
                Pendidikan Tinggi Nomor 1365/D/T/2004 tertanggal 13 April 2004
                memberikan ijin dan kewenangan kepada Universitas Diponegoro
                Semarang untuk menyelenggarakan pendidikan dalam bidang Ilmu
                Komputer (S-1 Reguler) terhitung mulai tahun ajaran 2004/2005.
                Pada tahun 2010 nama Ilmu Komputer, diubah menjadi Teknik
                Informatika sesuai dengan Surat Edaran Dikti mengenai
                nomenklatur program studi.
              </Text>
            </Grid.Col>
          </Grid>
        </Stack>
      </Stack>

      <Paper
        radius={64}
        withBorder
        sx={(theme) => ({
          margin: '80px 0',
          backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
          color: colorScheme === 'dark' ? 'white' : theme.colors.dark[8],
          borderColor:
            colorScheme === 'dark'
              ? theme.colors.gray[8]
              : theme.colors.gray[2],
        })}
        id='video-profil'
      >
        <Grid>
          <Grid.Col xl={6} md={12}>
            <Image
              radius='md'
              src='https://img.youtube.com/vi/3NRnR2bdZBI/sddefault.jpg'
              alt='Random unsplash image'
              width={'100%'}
              height={500}
              fit='cover'
              styles={{
                caption: {
                  textAlign: 'start',
                },
                image: {
                  borderRadius: 64,
                },
              }}
            />
          </Grid.Col>

          <Grid.Col
            xl={6}
            md={12}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 36px 64px',
            }}
          >
            <Stack spacing={44}>
              <Stack spacing={8}>
                <Text
                  size={
                    extraSmallMobile
                      ? 24
                      : smallMobile
                      ? 36
                      : largeMobile
                      ? 48
                      : tablet
                      ? 56
                      : 64
                  }
                  weight={600}
                >
                  Video Profil
                </Text>

                <Text className={sharedClasses.regularFontResponsive}>
                  Penasaran banget sama Informatika Universitas Diponegoro?
                  <br /> Yuk, tonton video profil departemen Informatika
                  Universitas
                  <br />
                  Diponegoro yang keren abis!
                </Text>
              </Stack>
              <Stack spacing={24}>
                <Anchor
                  href='#'
                  target='_blank'
                  className={sharedClasses.regularFontResponsive}
                >
                  Tonton selengkapnya di YouTube <FiArrowUpRight />
                </Anchor>

                <Anchor
                  href='#'
                  target='_blank'
                  className={sharedClasses.regularFontResponsive}
                >
                  Lihat Channel <FiArrowUpRight />
                </Anchor>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
};

Informatics.title = 'Informatics';
Informatics.pageTitle = 'Informatics';

export default Informatics;
