module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.js",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.ts",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-notes/register",
    "@storybook/addon-docs",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs/react/preset",
    "@storybook/react",
  ],
};
