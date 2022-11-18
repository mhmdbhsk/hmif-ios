import { WrapperArrowShape } from '@/assets';
import { Box, createStyles, Group, Paper, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
  titleFont: {
    fontSize: 36,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 32,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 24,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 22,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 18,
    },
  },

  descriptionFont: {
    fontSize: 16,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 14,
    },
  },
}));

type OutlineCardProps = {
  title: string;
  description: string;
  link: string;
  color?: string;
};

const OutlineCard = ({ title, description, link, color }: OutlineCardProps) => {
  const { classes } = useStyles();
  const router = useRouter();

  const shapeMotion = {
    rest: { rotate: 0 },
    hover: {
      rotate: 90,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
    },
  };

  const containerMotion = {
    rest: { scale: 1 },
    hover: {
      scale: 1.01,
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      initial='rest'
      whileHover='hover'
      whileTap='tap'
      animate='rest'
      variants={containerMotion}
    >
      <Paper
        radius={32}
        sx={{ padding: 32, background: color ?? '#B7C8FF', cursor: 'pointer' }}
        onClick={() => {
          router.push(link);
        }}
      >
        <Group position='apart'>
          <Stack spacing={0}>
            <Text className={classes.titleFont} weight='bold'>
              {title}
            </Text>
            <Text className={classes.descriptionFont}>{description}</Text>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <motion.div variants={shapeMotion}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <WrapperArrowShape />
                </Box>
              </motion.div>
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
          </Box>
        </Group>
      </Paper>
    </motion.div>
  );
};

export default motion(OutlineCard);
