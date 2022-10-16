import { Global } from '@mantine/core';

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => [
        {
          svg: {
            width: 'auto',
            height: 'auto',
          },
        },
      ]}
    />
  );
}

export default GlobalStyles;
