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
  name: "默认图标",
  args: {
    icon: "check",
    theme: "primary",
  },
};

export const Themes: Story = {
  name: "不同主题的图标",
  render: () => (
    <>
      <Icon
        icon="heart"
        theme="primary"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="secondary"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="success"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="info"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="warning"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="danger"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="light"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="dark"
        size="2x"
        style={{ marginRight: "10px" }}
      />
    </>
  ),
};

export const Sizes: Story = {
  name: "不同大小的图标",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon icon="heart" theme="primary" style={{ marginRight: "10px" }} />
      <Icon
        icon="heart"
        theme="secondary"
        size="2x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="success"
        size="3x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="info"
        size="4x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="warning"
        size="5x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="danger"
        size="6x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="light"
        size="7x"
        style={{ marginRight: "10px" }}
      />
      <Icon
        icon="heart"
        theme="dark"
        size="8x"
        style={{ marginRight: "10px" }}
      />
    </div>
  ),
};

export const ActionIcon: Story = {
  name: "更多行为的图标",
  render: () => (
    <>
      <Icon
        icon="spinner"
        size="2x"
        theme="primary"
        spin
        style={{ marginRight: "20px" }}
      />
      <Icon icon="spinner" size="2x" theme="danger" pulse />
    </>
  ),
};
