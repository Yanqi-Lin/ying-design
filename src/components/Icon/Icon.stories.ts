import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
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
    icon: "coffee",
    theme: "primary",
  },
};
