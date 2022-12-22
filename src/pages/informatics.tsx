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
import Paragraph from '@/components/Paragraph';
import Card from '@/components/Card';

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
    color: '#FFEBCD',
  },
  {
    title: 'Video Profil',
    description: 'Kenal lebih dekat',
    link: '#video-profil',
    color: '#BFF0DB',
  },
];

const Informatics: NextPageWithSeo = () => {
  const { classes: sharedClasses } = useSharedStyles();

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
        <Paragraph
          title='Tentang Kami'
          content={[
            'Informatika/Ilmu Komputer adalah ilmu yang mempelajari baik tentang komputasi, perangkat keras (hardware) maupun perangkat lunak (software). Ilmu komputer mencakup beragam topik yang berkaitan dengan komputer, mulai dari analisis abstrak algoritma sampai subyek yang lebih konkret seperti bahasa pemrograman, perangkat lunak, termasuk perangkat keras. Informatika beda loh dengan Teknik Komputer! Sebagai suatu disiplin ilmu, Ilmu Komputer lebih menekankan pada pemrograman komputer, dan rekayasa perangkat lunak (software). Sementara teknik komputer lebih cenderung berkaitan dengan hal-hal seperti perangkat keras komputer (hardware). Di Universitas Diponegoro sendiri Departemen Informatika merupakan bagian dari Fakultas Sains dan Matematika, sedangkan Departemen Teknik Komputer merupakan bagian dari Fakultas Teknik.',
          ]}
          id='tentang-kami'
        />

        <Image
          radius='md'
          src='/images/gedung-informatika.png'
          alt='Gedung Informatika di Fakultas Sains dan Matematika'
          caption='Gedung Informatika di Fakultas Sains dan Matematika'
          styles={{
            caption: {
              padding: '0 24px',
              textAlign: 'start',
            },
          }}
        />

        <Paragraph
          multiCol
          title='Sejarah Informatika'
          content={[
            'Pada tahun 1994 di Jurusan Matematika Universitas Diponegoro Semarang mulai memberlakukan kurikulum yang lebih mengarah pada aplikasi terapan di dunia nyata dan mengakomodasi kebutuhan pasar, sehingga kurikulum pada Jurusan Matematika Universitas Diponegoro Semarang dilakukan perubahan dengan membagi menjadi empat bidang peminatan, yaitu Matematika Murni, Matematika Terapan, Statistik, dan Ilmu Komputer.',
            'Pada tahun 2004, berdasarkan surat Direktorat Jenderal Pendidikan Tinggi Nomor 1365/D/T/2004 tertanggal 13 April 2004 memberikan ijin dan kewenangan kepada Universitas Diponegoro Semarang untuk menyelenggarakan pendidikan dalam bidang Ilmu Komputer (S-1 Reguler) terhitung mulai tahun ajaran 2004/2005. Pada tahun 2010 nama Ilmu Komputer, diubah menjadi Teknik Informatika sesuai dengan Surat Edaran Dikti mengenai nomenklatur program studi.',
          ]}
          id='sejarah-informatika'
        />
      </Stack>

      <Card
        variant='video-profile'
        id='video-profil'
        content={{
          title: 'Video Profil',
          description:
            'Penasaran banget sama Informatika Universitas Diponegoro? Yuk, tonton video profil departemen Informatika Universitas Diponegoro yang keren abis!',
          link: 'https://www.youtube.com/watch?v=F-4QQuaeKfs&ab_channel=HMIFUndip',
          videoId: 'F-4QQuaeKfs',
          channel: 'https://www.youtube.com/c/HMIFUndip',
        }}
      />
    </>
  );
};

Informatics.title = 'Informatics';
Informatics.pageTitle = 'Informatics';

export default Informatics;
