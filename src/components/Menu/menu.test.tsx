import React from "react";
import {
  render,
  screen,
  RenderResult,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
  defaultOpenSubMenus: ["4"],
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>opened1</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssFile: string = `
      .viking-submenu {
        display: none;
      }
      .viking-submenu.menu-opened {
        display:block;
      }
    `;
  const style = document.createElement("style");
  style.innerHTML = cssFile;
  return style;
};
let container: RenderResult,
  container2: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

describe("test Menu and MenuItem component in default(horizontal) mode", () => {
  it("should render correct Menu and MenuItem based on default props", () => {
    container = render(generateMenu(testProps));
    container.container.append(createStyleFile());
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("active");
    disabledElement = screen.getByText("disabled");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("yinyin-menu test");
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(5);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("click items should change active and call the right callback", () => {
    container = render(generateMenu(testProps));
    container.container.append(createStyleFile());
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("active");
    disabledElement = screen.getByText("disabled");
    const thirdItem = screen.getByText("xyz");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  });
  it("should show dropdown items when hover on subMenu", async () => {
    container = render(generateMenu(testProps));
    container.container.append(createStyleFile());
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("active");
    disabledElement = screen.getByText("disabled");
    //expect(screen.queryByText("drop1")).not.toBeVisible();
    const dropdownElement = screen.getByText("dropdown");
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => {
      expect(screen.queryByText("drop1")).toBeVisible();
    });
    fireEvent.click(screen.getByText("drop1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      //expect(screen.queryByText("dropdown")).not.toBeVisible();
    });
  });
});

describe("test Menu and MenuItem component in vertical mode", () => {
  it("should render vertical mode when mode is set to vertical", () => {
    container2 = render(generateMenu(testVerProps));
    container2.container.append(createStyleFile());
    const menuElement = screen.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
  it("should show dropdown items when click on subMenu for vertical mode", () => {
    container2 = render(generateMenu(testVerProps));
    container2.container.append(createStyleFile());
    const dropDownItem = screen.queryByText("drop1");
    //expect(dropDownItem).not.toBeVisible();
    fireEvent.click(screen.getByText("dropdown"));
    expect(dropDownItem).toBeVisible();
  });
  it("should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index", () => {
    container2 = render(generateMenu(testVerProps));
    container2.container.append(createStyleFile());
    expect(screen.queryByText("opened1")).toBeVisible();
  });
});
