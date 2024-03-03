import React from "react";
import Button from "./components/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
const App: React.FC = () => {
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
        <Menu defaultOpenSubMenus={["2"]} onSelect={index => alert(index)}>
          <MenuItem>test 1</MenuItem>
          <MenuItem disabled>test 2</MenuItem>
          <SubMenu title="test 3">
            <MenuItem>test 3-1</MenuItem>
            <MenuItem disabled>test 3-2</MenuItem>
          </SubMenu>
        </Menu>
        <Button> Hello </Button>
        <Button btnType="link" href="#">
          World
        </Button>
      </header>
    </div>
  );
};

export default App;
