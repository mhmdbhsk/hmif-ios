import Paragraph from '@/components/Paragraph';
import DivisionData from '@/configs/DivisionsData';
import { Jumbotron } from '@/components';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import { Image, Paper, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AgendaDetail: NextPageWithSeo = () => {
  const router = useRouter();
  const { id } = router.query;
  const data = DivisionData.find((item) => item.id === id);

  const containerMotion = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <Paper
        radius={32}
        sx={{
          padding: 32,
          background: '#B7C8FF',
          cursor: 'pointer',
          marginBottom: 46,
          display: 'flex',
          width: 'fit-content',
          gap: 16,
          alignItems: 'center',
        }}
        component={motion.div}
        onClick={() => {
          router.back();
        }}
        initial='rest'
        whileHover='hover'
        whileTap='tap'
        animate='rest'
        variants={containerMotion}
      >
        <FiArrowLeft /> Kembali
      </Paper>

      <Jumbotron title={data?.title} description={data?.subtitle} />

      <Stack spacing={46} sx={{ marginTop: 46 }}>
        <Image
          radius='md'
          src={data?.image}
          alt={data?.title}
          styles={{
            caption: {
              padding: '0 24px',
              textAlign: 'start',
            },
            image: {
              borderRadius: 64,
            },
          }}
        />
        <Paragraph
          multiCol={false}
          content={data?.description}
          id='pengurus-harian'
        />
      </Stack>
    </>
  );
};

AgendaDetail.title = 'Event';
AgendaDetail.pageTitle = 'Event';

export default AgendaDetail;
