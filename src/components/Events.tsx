import useSharedStyles from '@/theme/shared-styles';
import { Box, Grid } from '@mantine/core';
import { ReactNode } from 'react';
import EventCard from './EventCard';

type EventsProps = {
  events: EventsItemProps[];
};

type EventsItemProps = {
  title: string;
  description: string;
  icon: string | ReactNode;
  path: string;
  color?: string;
  isBigger?: boolean;
};

const Events = ({ events }: EventsProps) => {
  const { classes: sharedClasses } = useSharedStyles();

  return (
    <Box className={sharedClasses.contentSpacing}>
      <Grid gutter='xl' justify='space-between' sx={{ margin: -12 }}>
        {events.map((item) => (
          <Grid.Col xl={item.isBigger ? 6 : 4} md={12} sm={12} key={item.title}>
            <EventCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Events;
