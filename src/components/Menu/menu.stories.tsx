import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./index";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const meta: Meta<typeof Menu> = {
  title: "Component/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {},
};
export default meta;
type Story = StoryObj<typeof Menu>;

const showCode = `
<Menu defaultIndex="0" mode="horizontal">
    <Menu.Item>cool link 1</Menu.Item>
    <Menu.Item>cool link 2</Menu.Item>
    <Menu.Item>cool link 3</Menu.Item>
    <Menu.SubMenu title="dropdown">
        <Menu.Item>drop1</Menu.Item>
        <Menu.Item>drop2</Menu.Item>
        <Menu.Item>drop3</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item disabled>cool link 4</Menu.Item>
    <Menu.Item>
        <a href="https://cn.bing.com/" style={{ color: "black" }}>
            Link
        </a>
    </Menu.Item>
</Menu>
`;
export const UpperMenu: Story = {
  name: "水平导航菜单",
  parameters: {
    docs: {
      description: {
        story: "",
      },
      source: {
        code: showCode,
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ height: "200px" }}>
        <Story />
      </div>
    ),
  ],
  render: args => (
    <Menu defaultIndex="0" mode="horizontal" {...args}>
      <Menu.Item>cool link 1</Menu.Item>
      <Menu.Item>cool link 2</Menu.Item>
      <Menu.Item>cool link 3</Menu.Item>
      <Menu.SubMenu title="dropdown">
        <Menu.Item>drop1</Menu.Item>
        <Menu.Item>drop2</Menu.Item>
        <Menu.Item>drop3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item disabled>cool link 4</Menu.Item>
      <Menu.Item>
        <a href="https://cn.bing.com/" style={{ color: "black" }}>
          Link
        </a>
      </Menu.Item>
    </Menu>
  ),
};

const showCode2 = `
<Menu
  defaultIndex="0"
  mode="vertical"
  defaultOpenSubMenus={["1", "1-4"]}
  {...args}
>
    <Menu.SubMenu title="dropdown1">
        <Menu.Item>drop1</Menu.Item>
        <Menu.Item>drop2</Menu.Item>
        <Menu.Item>drop3</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="dropdown2">
        <Menu.Item>drop1</Menu.Item>
        <Menu.Item>drop2</Menu.Item>
        <Menu.Item>drop3</Menu.Item>
        <Menu.Item>drop4</Menu.Item>
        <Menu.Item>
          <Menu.SubMenu title="dropdown2" index="1-4">
            <Menu.Item>drop1</Menu.Item>
            <Menu.Item>drop2</Menu.Item>
            <Menu.Item>drop3</Menu.Item>
            <Menu.Item>drop4</Menu.Item>
            <Menu.Item>drop5</Menu.Item>
          </Menu.SubMenu>
        </Menu.Item>
    </Menu.SubMenu>
</Menu>
`;
export const VerticalMenu: Story = {
  name: "垂直导航菜单",
  parameters: {
    docs: {
      description: {
        story: "",
      },
      source: {
        code: showCode2,
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
  render: args => (
    <Menu
      defaultIndex="0"
      mode="vertical"
      defaultOpenSubMenus={["1"]}
      {...args}
    >
      <Menu.SubMenu title="dropdown1">
        <Menu.Item>drop1</Menu.Item>
        <Menu.Item>drop2</Menu.Item>
        <Menu.Item>drop3</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="dropdown2">
        <Menu.Item>drop1</Menu.Item>
        <Menu.Item>drop2</Menu.Item>
        <Menu.Item>drop3</Menu.Item>
        <Menu.Item>drop4</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  ),
};
