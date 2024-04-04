import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: "默认输入框",
  args: {
    placeholder: "请输入......",
  },
};
export const Icon: Story = {
  name: "添加图标",
  args: {
    placeholder: "请输入......",
    icon: "magnifying-glass",
  },
};
export const prepend: Story = {
  name: "添加前缀",
  args: {
    placeholder: "请输入......",
    prepend: "Http://",
  },
};
export const append: Story = {
  name: "添加后缀",
  args: {
    placeholder: "请输入......",
    append: ".com",
  },
};
