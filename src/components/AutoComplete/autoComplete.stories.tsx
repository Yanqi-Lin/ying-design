import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AutoComplete, {
  AutoCompleteProps,
  DataSourceType,
} from "./autoComplete";

const meta = {
  title: "Component/AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AutoComplete>;
export default meta;
type Story = StoryObj<typeof AutoComplete>;

// fetch data
export const getDataSync: Story = {
  render: () => {
    const handleFetchSync = (query: string) => {
      return fetch("https://api.github.com/search/users?q=" + query)
        .then(res => res.json())
        .then(({ items }) => {
          console.log(items);
          return items
            .slice(0, 10)
            .map((item: any) => ({ value: item.login, ...item }));
        });
    };
    return (
      <AutoComplete
        fetchSuggestions={handleFetchSync}
        placeholder="输入Github用户名"
        style={{ width: "300px" }}
      />
    );
  },
};

// template

export const getDataWithTemplate: Story = {
  render: () => {
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
        fetchSuggestions={handleFetchTemplate}
        renderOption={renderOption}
        placeholder="输入球员名称"
        style={{ width: "300px" }}
      />
    );
  },
};
