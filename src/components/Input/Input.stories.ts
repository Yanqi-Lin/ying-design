import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index";

const meta = {
  title: "Example/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "请输入......",
  },
};
export const Icon: Story = {
  args: {
    value: "请输入......",
    icon: "magnifying-glass",
  },
};
export const prepend: Story = {
  args: {
    value: "请输入......",
    prepend: "Http://",
  },
};
export const append: Story = {
  args: {
    value: "请输入......",
    append: ".com",
  },
};
