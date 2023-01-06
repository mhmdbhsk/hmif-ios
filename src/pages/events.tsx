import { Box, createStyles, Stack, Text } from '@mantine/core';
import { Jumbotron, Title } from '@/components';
import useSharedStyles from '@/theme/shared-styles';
import { NextPageWithSeo } from '@/types/next-page-with-seo';
import Outline from '@/components/Outline';

import Events from '@/components/Events';
import EventsLinks from '@/configs/EventsLinks';
import AgendasLinks from '@/configs/AgendasLinks';
import GalleriesLinks from '@/configs/GalleriesLinks';

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

const eventsOutline = [
  {
    title: 'Events',
    description: 'Event di Informatika Undip',
    link: '#events',
    color: '#B7C8FF',
  },
  {
    title: 'Agenda',
    description: 'Agenda-agenda HMIF',
    link: '#agenda',
    color: '#FFEBCD',
  },
  {
    title: 'Gallery',
    description: 'Galeri kegiatan HMIF',
    link: '#gallery',
    color: '#BFF0DB',
  },
];

const EventsActivities: NextPageWithSeo = () => {
  const { classes: sharedClasses } = useSharedStyles();
  const { classes } = useStyles();

  return (
    <>
      <Jumbotron
        title='Chapter 3'
        background='#DFF7ED'
        description={
          <Text>
            Hi Informatics! Wah, gak kerasa ya kita udah masuk ke chapter 3!
            Pada chapter 3 kali ini, kita akan mengintip semua event yang ada di
            dalam Informatika Undip. Banyak banget lho, event dan kegiatan yang
            bisa kamu ikuti sebagai mahasiswa Informatika Undip. Penasaran?
            Kuyy, check it out!
          </Text>
        }
      />

      <Box className={sharedClasses.contentSpacing}>
        <Title
          title='Events and Activities'
          subtitle='Acara-acara seru di Informatika Undip'
        />
        <Outline outline={eventsOutline} />
      </Box>

      <Stack id='events'>
        <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='divisi'>
          <Text weight={600} className={classes.titleFont}>
            Events
          </Text>
        </Stack>
        <Events events={EventsLinks} />
      </Stack>
      <Stack id='agenda'>
        <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='divisi'>
          <Text weight={600} className={classes.titleFont}>
            Agenda
          </Text>
        </Stack>
        <Events events={AgendasLinks} />
      </Stack>
      <Stack id='gallery'>
        <Stack spacing={24} sx={{ padding: '80px 24px 0px' }} id='divisi'>
          <Text weight={600} className={classes.titleFont}>
            Gallery
          </Text>
        </Stack>
        <Events events={GalleriesLinks} />
      </Stack>
    </>
  );
};

EventsActivities.title = 'Event, Agenda, dan Galeri';
EventsActivities.pageTitle = 'Event, Agenda, dan Galeri';

export default EventsActivities;
