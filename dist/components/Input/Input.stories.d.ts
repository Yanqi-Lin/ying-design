/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import Input from "./index";
declare const meta: {
    title: string;
    component: import("react").FC<import("./input").InputProps>;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof Input>;
export declare const Default: Story;
export declare const Icon: Story;
export declare const prepend: Story;
export declare const append: Story;
