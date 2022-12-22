import { WrapperArrowShape } from '@/assets';
import { Box, createStyles, Group, Paper, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useWindowSize } from '@/hooks/useMediaQuery';
import { ReactNode } from 'react';

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
    fontSize: 14,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 12,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 12,
    },
  },

  paperPadding: {
    padding: 32,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      padding: 24,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      padding: 22,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: 18,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: 14,
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      padding: 12,
    },
  },
}));

type DivisionCardProps = {
  title: string;
  description: string;
  icon: string | ReactNode;
  path: string;
  color?: string;
};

const DivisionCard = ({
  title,
  description,
  icon,
  path,
  color,
}: DivisionCardProps) => {
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
      style={{ height: '100%' }}
    >
      <Paper
        radius={32}
        className={classes.paperPadding}
        sx={{
          display: 'flex',
          flexGrow: 1,
          background: color ?? '#B7C8FF',
          cursor: 'pointer',
          height: '100%',
          minHeight: 256,
        }}
        onClick={() => {
          router.push(path);
        }}
      >
        <Group sx={{ height: '100%', width: '100%' }}>
          <Stack
            spacing={8}
            sx={{ height: '100%', width: '100%' }}
            justify='space-between'
          >
            <Group position='right'>
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
                <Box
                  style={{
                    position: 'absolute',
                    margin: 'auto auto',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  }}
                >
                  {icon}
                </Box>
              </Box>
            </Group>
            <Stack spacing='xs'>
              <Text className={classes.titleFont} weight='bold'>
                {title}
              </Text>

              <Text sx={{ opacity: 0.5 }} className={classes.descriptionFont}>
                {description}
              </Text>
            </Stack>
          </Stack>
        </Group>
      </Paper>
    </motion.div>
  );
};

export default motion(DivisionCard);
