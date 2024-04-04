import { FC } from "react";
import BaseMenu, { MenuProps } from "./menu";
import SubMenu, { SubMenuProps } from "./subMenu";
import MenuItem, { MenuItemProps } from "./menuItem";

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
const Menu = BaseMenu as IMenuComponent;

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
