import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "默认按钮",
  parameters: {
    docs: {
      description: {
        story: "默认按钮,常见按钮设计。",
      },
    },
  },
  args: {
    children: "default",
  },
};

export const Link: Story = {
  name: "不同类型的按钮",
  parameters: {
    docs: {
      description: {
        story: "有4种类型的按钮可供选择：primary、default、danger、link。",
      },
      source: {
        code: `
 <Button
  btnType="primary"
  style={{ marginRight: "10px", marginTop: "10px" }}
>
  danger button
</Button>
<Button
  btnType="default"
  style={{ marginRight: "10px", marginTop: "10px" }}
>
  primary button
</Button>
<Button
  btnType="danger"
  style={{ marginRight: "10px", marginTop: "10px" }}
>
  default button
</Button>
<Button
  btnType="link"
  href="https://github.com"
  style={{ marginRight: "10px", marginTop: "10px" }}
>
  link button
</Button>
`,
      },
    },
  },
  render: () => (
    <>
      <Button
        btnType="primary"
        style={{ marginRight: "10px", marginTop: "10px" }}
      >
        primary button
      </Button>
      <Button
        btnType="default"
        style={{ marginRight: "10px", marginTop: "10px" }}
      >
        default button
      </Button>
      <Button
        btnType="danger"
        style={{ marginRight: "10px", marginTop: "10px" }}
      >
        danger button
      </Button>
      <Button
        btnType="link"
        href="https://github.com"
        style={{ marginRight: "10px", marginTop: "10px" }}
      >
        link button
      </Button>
    </>
  ),
};

export const Sizes: Story = {
  name: "不同大小的按钮",
  parameters: {
    docs: {
      description: {
        story: "除默认大小外，有2种大小的按钮可供选择：lg、sm。",
      },
      source: {
        code: `
 <Button
  btnType="default"
  size="lg"
  style={{ marginRight: "10px" }}
>
  large button
</Button>
<Button btnType="default" style={{ marginRight: "10px" }}>
  default button
</Button>
<Button
  btnType="default"
  size="sm"
>
  small button
</Button>
`,
      },
    },
  },
  render: () => (
    <>
      <Button btnType="default" size="lg" style={{ marginRight: "10px" }}>
        large button
      </Button>
      <Button btnType="default" style={{ marginRight: "10px" }}>
        default button
      </Button>
      <Button btnType="default" size="sm">
        small button
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  name: "不可用状态",
  parameters: {
    docs: {
      description: {
        story: "添加 disabled 属性即可让按钮处于不可用状态。",
      },
    },
  },
  args: {
    btnType: "primary",
    disabled: true,
    children: "Button",
  },
};
