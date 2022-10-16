import { createStyles } from '@mantine/core';

const useSharedStyles = createStyles((theme) => ({
  regularFontResponsive: {
    fontSize: 16,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 16,
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
  contentSpacing: {
    margin: '80px 0',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      margin: '80px 0',
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      margin: '60px 0',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      margin: '40px 0',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      margin: '24px 0',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      margin: '24px 0',
    },
  },
}));

export default useSharedStyles;
