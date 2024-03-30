import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AutoComplete, { DataSourceType } from "./autoComplete";

const meta = {
  title: "Component/AutoComplete",
  component: AutoComplete,
  decorators: [
    Story => (
      <div style={{ height: "200px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AutoComplete>;
export default meta;

type Story = StoryObj<typeof AutoComplete>;

// fetch data
const showCode = `
const handleFetchSync = async (query: string) => {
  try {
    const response = await fetch(
      "https://api.github.com/search/users?q=" + query
    );
    const data = await response.json();
    const items = data.items;
    return items
      .slice(0, 5)
      .map((item: any) => ({ value: item.login, ...item }));
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
return (
  <AutoComplete
    fetchSuggestions={handleFetchSync}
    placeholder="输入Github用户名"
  />
);
`;
export const GetDataSync: Story = {
  name: "异步获取提示词",
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
  render: args => {
    const handleFetchSync = async (query: string) => {
      try {
        const response = await fetch(
          "https://api.github.com/search/users?q=" + query
        );
        const data = await response.json();
        const items = data.items;
        return items
          .slice(0, 5)
          .map((item: any) => ({ value: item.login, ...item }));
      } catch (error) {
        console.error("Error fetching GitHub users:", error);
        throw error;
      }
    };
    return (
      <AutoComplete
        {...args}
        style={{ width: "250px" }}
        fetchSuggestions={handleFetchSync}
        placeholder="输入Github用户名"
      />
    );
  },
};

// template
const showCode2 = `
interface customProps {
  value: string;
  number: number;
}
const lakersWithNumber = [
  { value: "bradley", number: 11 },
  { value: "pope", number: 1 },
  { value: "caruso", number: 4 },
  { value: "cook", number: 2 },
  { value: "cousins", number: 15 },
  { value: "james", number: 23 },
  { value: "AD", number: 3 },
  { value: "green", number: 14 },
  { value: "howard", number: 39 },
  { value: "kuzma", number: 0 },
];
const handleFetchTemplate = (query: string) => {
  return lakersWithNumber.filter(player => player.value.includes(query));
};
const renderOption = (item: DataSourceType) => {
  const itemWithNumber = item as DataSourceType<customProps>;
  return (
    <React.Fragment>
      <b>名字：{itemWithNumber.value}</b>&nbsp; &nbsp;
      <span>球衣号码: {itemWithNumber.number}</span>
    </React.Fragment>
  );
};
return (
  <AutoComplete
    {...args}
    fetchSuggestions={handleFetchTemplate}
    renderOption={renderOption}
    placeholder="输入球员名称"
  />
);
`;

export const GetDataWithTemplate: Story = {
  name: "自定义提示词模版",
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
  render: args => {
    interface customProps {
      value: string;
      number: number;
    }
    const lakersWithNumber = [
      { value: "bradley", number: 11 },
      { value: "pope", number: 1 },
      { value: "caruso", number: 4 },
      { value: "cook", number: 2 },
      { value: "cousins", number: 15 },
      { value: "james", number: 23 },
      { value: "AD", number: 3 },
      { value: "green", number: 14 },
      { value: "howard", number: 39 },
      { value: "kuzma", number: 0 },
    ];
    const handleFetchTemplate = (query: string) => {
      return lakersWithNumber.filter(player => player.value.includes(query));
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithNumber = item as DataSourceType<customProps>;
      return (
        <React.Fragment>
          <b>名字：{itemWithNumber.value}</b>&nbsp; &nbsp;
          <span>球衣号码: {itemWithNumber.number}</span>
        </React.Fragment>
      );
    };
    return (
      <AutoComplete
        {...args}
        style={{ width: "250px" }}
        fetchSuggestions={handleFetchTemplate}
        renderOption={renderOption}
        placeholder="输入球员名称"
      />
    );
  },
};
