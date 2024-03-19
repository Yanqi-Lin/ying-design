import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";

const meta: Meta = {
  title: "Component/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: "check",
    theme: "primary",
  },
};

export const Large: Story = {
  args: {
    icon: "check",
    theme: "primary",
    size: "3x",
  },
};
