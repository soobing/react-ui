module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.js",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.ts",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-knobs/register",
    "@storybook/react",
  ],
};
