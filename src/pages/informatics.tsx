import {
  Anchor,
  Box,
  Button,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import { IosLogo, WrapperArrowShape } from '@/assets';
import { FiArrowUpRight } from 'react-icons/fi';
import { Jumbotron, Title } from '@/components';
import useSharedStyles from '@/theme/shared-styles';

function Home() {
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
        <Grid gutter='xl' className={sharedClasses.contentSpacing}>
          <Grid.Col span={6}>
            <Paper radius={24} sx={{ padding: 32, background: '#B7C8FF' }}>
              <Group position='apart'>
                <Stack spacing={0}>
                  <Text size={24} weight='bold'>
                    Tentang Kami
                  </Text>
                  <Text size={24}>Departemen Informatika</Text>
                </Stack>

                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <WrapperArrowShape />
                  <FiArrowUpRight
                    style={{
                      position: 'absolute',
                      margin: 'auto auto',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    }}
                  />
                </Box>
              </Group>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper radius={24} sx={{ padding: 32, background: '#FFEBCD' }}>
              <Group position='apart'>
                <Stack spacing={0}>
                  <Text size={24} weight='bold'>
                    Fun Fact
                  </Text>
                  <Text size={24}>Apasih yang unik?</Text>
                </Stack>

                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <WrapperArrowShape />
                  <FiArrowUpRight
                    style={{
                      position: 'absolute',
                      margin: 'auto auto',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    }}
                  />
                </Box>
              </Group>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper radius={24} sx={{ padding: 32, background: '#BFF0DB' }}>
              <Group position='apart'>
                <Stack spacing={0}>
                  <Text size={24} weight='bold'>
                    Video Profil
                  </Text>
                  <Text size={24}>Kenal lebih dekat</Text>
                </Stack>

                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <WrapperArrowShape />
                  <FiArrowUpRight
                    style={{
                      position: 'absolute',
                      margin: 'auto auto',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    }}
                  />
                </Box>
              </Group>
            </Paper>
          </Grid.Col>
        </Grid>
      </Box>

      <Stack spacing={80}>
        <Stack spacing={80}>
          <Text size={54} weight={600}>
            Tentang Kami
          </Text>
          <Box sx={{ width: '80%' }}>
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

        <Stack spacing={80}>
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

          <Image
            radius='md'
            src='/images/gedung-informatika.png'
            alt='Random unsplash image'
            caption='Gedung Informatika di Fakultas Sains dan Matematika'
            styles={{
              caption: {
                textAlign: 'start',
              },
            }}
          />
        </Stack>
      </Stack>

      <Paper radius={64} withBorder sx={{ height: 500, margin: '80px 0' }}>
        <Grid>
          <Grid.Col span={6}>
            <Image
              radius='md'
              src='https://img.youtube.com/vi/3NRnR2bdZBI/sddefault.jpg'
              alt='Random unsplash image'
              width={535}
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
            span={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 36px 0 0',
            }}
          >
            <Stack spacing={44}>
              <Stack spacing={8}>
                <Text size={64} weight={600}>
                  Video Profil
                </Text>

                <Text>
                  Penasaran banget sama Informatika Universitas Diponegoro?
                  <br /> Yuk, tonton video profil departemen Informatika
                  Universitas
                  <br />
                  Diponegoro yang keren abis!
                </Text>
              </Stack>
              <Stack spacing={24}>
                <Anchor href='#' target='_blank'>
                  Tonton selengkapnya di YouTube <FiArrowUpRight />
                </Anchor>

                <Anchor href='#' target='_blank'>
                  Lihat Channel <FiArrowUpRight />
                </Anchor>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
}

export default Home;
