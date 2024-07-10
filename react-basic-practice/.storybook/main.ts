import type {  } from "@storybook/react";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@chakra-ui/storybook-addon",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  features: {
    emotionAlias: false,
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  staticDirs: ["..\\public"],

  docs: {}
};
export default config;
