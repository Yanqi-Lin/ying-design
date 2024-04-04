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
  /** 默认选中索引值 */
  defaultIndex?: string;
  /** 自定义类名 */
  className?: string;
  /** 排列模式：水平排列或垂直排列 */
  mode?: MenuMode;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 被选中时调用 */
  onSelect?: (selectedIndex: string) => void;
  /** 设置默认展开的下拉菜单项，只有垂直排列时生效，与indx属性配合使用 */
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
/**
 * 为页面和功能提供导航的菜单列表。
 * - Menu.SubMenu 下拉菜单，index属性，自定义菜单项索引值; title属性，自定义菜单项标题。
 * - Menu.Item 子菜单，iindex属性，自定义菜单项索引值; disabled属性，设置禁用状态。
 *
 * ### 引用方法
 * ~~~js
 * import { Menu } from 'ying-ui'
 * //然后可以使用 Menu.Item 和 Menu.SubMenu 访问选项和子下拉菜单组件
 * ~~~
 */

export const BaseMenu: FC<MenuProps> = props => {
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

BaseMenu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default BaseMenu;
