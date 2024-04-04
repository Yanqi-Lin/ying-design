import React from "react";
import Button from "./components/Button";
// import Menu from "./components/Menu/menu";
// import MenuItem from "./components/Menu/menuItem";
// import SubMenu from "./components/Menu/subMenu";
import Menu from "./components/Menu";
import Icon from "./components/Icon";
import AutoComplete from "./components/AutoComplete";
import Progress from "./components/Progress";
const App: React.FC = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items);
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Menu
          defaultOpenSubMenus={["2"]}
          onSelect={index => alert(index)}
          //mode="vertical"
        >
          <Menu.Item>
            <Icon icon="check" theme="danger" />
            test 1
          </Menu.Item>
          <Menu.Item disabled>test 2</Menu.Item>
          <Menu.SubMenu title="test 3">
            <Menu.Item>test 3-1</Menu.Item>
            <Menu.Item disabled>test 3-2</Menu.Item>
            <Menu.Item>
              <Button></Button>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
        {/* <Menu defaultOpenSubMenus={["2"]} onSelect={index => alert(index)}>
          <MenuItem>test 1</MenuItem>
          <MenuItem disabled>test 2</MenuItem>
          <SubMenu title="test 3">
            <MenuItem>test 3-1</MenuItem>
            <MenuItem disabled>test 3-2</MenuItem>
          </SubMenu>
        </Menu> */}
        <Button> Hello </Button>
        <Button btnType="link" href="#">
          World
        </Button>
        <div style={{ width: "300px" }}>
          <AutoComplete fetchSuggestions={handleFetch} />
        </div>
        <Progress percent={30} styles={{ width: "300px" }} />
      </header>
    </div>
  );
};

export default App;
