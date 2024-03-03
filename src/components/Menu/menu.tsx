import React, {
  FC,
  useState,
  createContext,
  CSSProperties,
  Children,
} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
export interface BaseMenuProps {
  /** index of default active item **/
  defaultIndex?: string;
  className?: string;
  /** horizontal or vertical **/
  mode?: MenuMode;
  style?: CSSProperties;
  /** menu items callback func **/
  onSelect?: (selectedIndex: string) => void;
  /** set menu item default open, only in mode of horizontal **/
  defaultOpenSubMenus?: string[];
}
export type MenuProps = Partial<
  BaseMenuProps & React.HTMLAttributes<HTMLUListElement>
>;
/** handle with context **/
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: "0" });

export const Menu: FC<MenuProps> = props => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;

  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("yinyin-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode === "horizontal",
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  // render children elements
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default Menu;
