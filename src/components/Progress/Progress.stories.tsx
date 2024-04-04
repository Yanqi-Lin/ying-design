import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./progress";

const meta = {
  title: "Component/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Primary: Story = {
  name: "标准进度条",
  args: {
    percent: 30,
    styles: {
      width: "300px",
    },
  },
};
