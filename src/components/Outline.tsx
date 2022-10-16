import useSharedStyles from '@/theme/shared-styles';
import { Grid } from '@mantine/core';
import OutlineCard from './OutlineCard';

type OutlineProps = {
  outline: OutlineItemProps[];
};

type OutlineItemProps = {
  title: string;
  description: string;
  link: string;
};

const Outline = ({ outline }: OutlineProps) => {
  const { classes: sharedClasses } = useSharedStyles();

  return (
    <Grid
      gutter='xl'
      justify='space-between'
      grow={true}
      className={sharedClasses.contentSpacing}
    >
      {outline.map((item) => (
        <Grid.Col xl={6} md={12} key={item.title}>
          <OutlineCard {...item} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Outline;
