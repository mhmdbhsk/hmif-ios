import { Jumbotron } from '@/components';
import { useWindowSize } from '@/hooks/useMediaQuery';
import { Paper, Stack, Text } from '@mantine/core';

function Home() {
  return (
    <>
      <Jumbotron
        title={
          <span>
            Meet <br /> Diponegoro’s <br /> Informatics!
          </span>
        }
        description='Pada chapter ini kamu akan menyimak berbagai hal seputar Informatika,
          Universitas Diponegoro. Dimulai dari apa itu Departemen Informatika,
          fasilitas laboratorium, hingga fun fact dari Informatika.'
      />
    </>
  );
}

export default Home;
