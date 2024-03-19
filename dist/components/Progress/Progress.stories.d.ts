/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import Progress from "./progress";
declare const meta: {
    title: string;
    component: import("react").FC<import("./progress").ProgressProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof Progress>;
export declare const Primary: Story;
