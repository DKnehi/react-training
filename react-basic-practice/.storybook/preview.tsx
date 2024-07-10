import React from "react";
import type { Preview } from "@storybook/react";
import theme from "../src/themes"
import { ChakraProvider } from '@chakra-ui/react';

export const parameters = {
  chakra: {
    theme,
  },
}

// export const decorators = [
//   (Story) => (
//       <ChakraProvider theme={theme}>
//         <Story />
//       </ChakraProvider>
//   ),
// ];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;