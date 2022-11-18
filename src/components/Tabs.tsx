import useColorScheme from '@/hooks/useColorScheme';
import {
  MantineTheme,
  Tabs as MantineTabs,
  TabsProps as MantineTabsProps,
} from '@mantine/core';

function StyledTabs(props: MantineTabsProps) {
  const isDark = useColorScheme();

  return (
    <MantineTabs
      unstyled
      styles={(theme: MantineTheme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: isDark ? theme.colors.dark[8] : theme.white,
          color: isDark ? theme.white : theme.colors.gray[9],
          border: 'none',
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          fontFamily: theme.fontFamily,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 12,

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
          width: '100%',
          gap: 16,
        },
      })}
      {...props}
    />
  );
}

type TabsProps = {
  content: {
    tabTitle: string;
    tabContent: React.ReactNode;
    tabIcon?: React.ReactNode;
    tabValue: string;
  }[];
};

const Tabs: React.FC<TabsProps> = ({ content }) => {
  return (
    <StyledTabs defaultValue={content[0].tabValue}>
      <MantineTabs.List>
        {content.map((item) => (
          <MantineTabs.Tab
            value={item.tabValue}
            icon={item.tabIcon}
            key={item.tabValue}
          >
            {item.tabTitle}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>

      {content.map((item) => (
        <MantineTabs.Panel
          value={item.tabValue}
          key={item.tabValue}
          sx={{ width: '100%' }}
        >
          {item.tabContent}
        </MantineTabs.Panel>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
