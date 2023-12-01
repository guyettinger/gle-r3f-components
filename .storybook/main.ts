import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import glslify from "vite-plugin-glslify";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-docs",
        "@storybook/addon-storysource"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    staticDirs: [
        { from: '../public', to: '/' }
    ],
    docs: {
        autodocs: "tag",
    },
    viteFinal(config) {
        return mergeConfig(config, {
            base: "",
            plugins: [glslify()],
        });
    },
};
export default config;
