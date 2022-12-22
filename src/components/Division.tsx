import useSharedStyles from '@/theme/shared-styles';
import { Box, Grid } from '@mantine/core';
import DivisionCard from './DivisionCard';

type DivisionProps = {
  division: DivisionItemProps[];
};

type DivisionItemProps = {
  title: string;
  description: string;
  image: string | null;
  path: string;
  color?: string;
  isBigger?: boolean;
};

const Division = ({ division }: DivisionProps) => {
  const { classes: sharedClasses } = useSharedStyles();

  return (
    <Box className={sharedClasses.contentSpacing}>
      <Grid gutter='xl' justify='space-between' sx={{ margin: -12 }}>
        {division.map((item) => (
          <Grid.Col
            xl={item.isBigger ? 8 : 4}
            md={item.isBigger ? 12 : 6}
            sm={12}
            key={item.title}
          >
            <DivisionCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Division;
