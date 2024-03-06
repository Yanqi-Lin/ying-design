import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  //   // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    btnType: "primary",
    children: "Primary",
  },
};

export const Link: Story = {
  args: {
    btnType: "link",
    children: "link",
    href: "github.com",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
