import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
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
            plugins: [],
        });
    },
};
export default config;