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
    icon: "primary",
    children: "Primary", // 我看Icon的类型定义里面没有显式的声明children属性？虽然没报错，但是确定这样写可以吗？
  },
};
